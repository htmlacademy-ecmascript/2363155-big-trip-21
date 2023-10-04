import 'flatpickr/dist/flatpickr.css';
import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
import flatpickr from 'flatpickr';
import {escape} from 'he';

dayjs.extend(durationPlugin);

/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @returns {string}
 */
function html(strings, ...values) {
  return strings.reduce((result, string, index) => {
    const value = values[index];
    const processedValue = Array.isArray(value) ? value.join('') : value;

    return `${result}${string}${processedValue ?? ''}`;
  }, '');
}

/**
 * @param {dayjs.ConfigType} value
 * @param {boolean} [isNarrow]
 * @returns {string}
 */
function formatDate(value, isNarrow) {
  return dayjs(value).format(isNarrow ? 'D' : 'D MMM');
}

/**
 * @param {dayjs.ConfigType} date
 * @returns {string}
 */
function formatTime(date) {
  return dayjs(date).format('HH:mm');
}

/**
 * @param {dayjs.ConfigType} dateFrom
 * @param {dayjs.ConfigType} dateTo
 * @returns {string}
 */
function formatDuration(dateFrom, dateTo) {
  const duration = dayjs.duration(dayjs(dateTo).diff(dateFrom));
  if (duration.days()) {
    return duration.format('DD[d] HH[h] mm[m]');
  }
  if (duration.hours()) {
    return duration.format('HH[h] mm[m]');
  }

  return duration.format('mm[m]');
}

/**
 * @param {number} value
 * @returns {string}
 */
function formatNumber(value) {
  return value.toLocaleString('en');
}

/**
 * @param {HTMLInputElement} inputFrom
 * @param {HTMLInputElement} inputTo
 * @returns {Function}
 */
function createCalendars(inputFrom, inputTo) {
  /**
   * @type {import('flatpickr/dist/types/options').Options}
   */
  const commonOptions = {
    dateFormat: 'Z',
    altInput: true,
    altFormat: 'd/m/y H:i',
    locale: {firstDayOfWeek: 1},
    enableTime: true,
    'time_24hr': true
  };

  const calendarFrom = flatpickr(inputFrom, commonOptions);
  const calendarTo = flatpickr(inputTo, commonOptions);

  calendarFrom.set('onChange', ([date]) => calendarTo.set('minDate', date));
  calendarTo.set('minDate', calendarFrom.selectedDates.at(0));

  return () => {
    calendarFrom.destroy();
    calendarTo.destroy();
  };
}


/**
* @param {any} data
* @returns {any}
*/
function sanitize(data) {
  switch (data?.constructor) {
    case String:
      return escape(data);

    case Array:
      return data.map(sanitize);

    case Object:
      return Object.keys(data).reduce((copy, key) => {
        copy[key] = sanitize(data[key]);

        return copy;
      }, {});

    default:
      return data;
  }
}

/**
 * @param {Array<string>} items
 * @returns {string}
 */
function formatList(items) {
  items = structuredClone(items);
  if (items.length > 3) {
    items.splice(1, items.length - 2, '...');
  }
  return items.join(' — ');
}

/**
 * @param {dayjs.ConfigType} valueFrom
 * @param {dayjs.ConfigType} valueTo
 * @returns {string}
 */
function formatDateRange(valueFrom, valueTo) {
  valueFrom = dayjs(valueFrom);
  valueTo = dayjs(valueTo);

  if (valueFrom.isSame(valueTo, 'day')) {
    return formatDate(valueFrom);
  }
  return [
    formatDate(valueFrom, valueFrom.isSame(valueTo, 'month')),
    formatDate(valueTo)
  ].join(' — ');
}

export {
  html,
  formatDate,
  formatTime,
  formatDuration,
  formatNumber,
  createCalendars,
  sanitize,
  formatList,
  formatDateRange
};

