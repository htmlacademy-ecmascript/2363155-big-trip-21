import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

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
 * @param {dayjs.ConfigType} date
 * @returns {string}
 */
function formatDate(date) {
  return dayjs(date).format('MMM DD');
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

export {html, formatDate, formatTime, formatDuration, formatNumber};

