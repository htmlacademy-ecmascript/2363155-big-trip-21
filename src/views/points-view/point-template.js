import { getFormattedDate, getDuration } from '../../utils/dates.js';
import { MINUTES_IN_HOUR, MINUTES_IN_DAY } from '../../const.js';
import he from 'he';

function getDurationMessage(durationInMinutes) {
  const days = Math.floor(durationInMinutes / MINUTES_IN_DAY);
  const hours = Math.floor(durationInMinutes % MINUTES_IN_DAY / MINUTES_IN_HOUR);
  const minutes = Math.floor(durationInMinutes % MINUTES_IN_HOUR);

  if (days > 0) {
    return `${days}D ${hours}H ${minutes}M`;
  }

  if (hours > 0) {
    return `${hours}H ${minutes}M`;
  }

  return `${minutes}M`;
}

export function createTemplate(point, offers, destination) {
  const { dateFrom, dateTo, isFavorite } = point;
  const pointType = he.encode(point.type);
  const pointPrice = he.encode(String(point.basePrice));

  const dateStart = getFormattedDate(dateFrom, 'MMM DD');
  const dateTimeStart = getFormattedDate(dateFrom, 'YYYY-MM-DD');
  const dateTimeEnd = getFormattedDate(dateTo, 'YYYY-MM-DD');
  const timeStart = getFormattedDate(dateFrom, 'HH:mm');
  const timeEnd = getFormattedDate(dateTo, 'HH:mm');
  const durationMessage = getDurationMessage(getDuration(dateFrom, dateTo));
  const favoriteClass = (isFavorite) ? 'event__favorite-btn--active' : '';

  const offersTemplate = offers.reduce((template, offer) => `${template}
      <li class="event__offer">
        <span class="event__offer-title">${he.encode(offer.title)}</span>
        +&euro;&nbsp;
        <span class="event__offer-price">${he.encode(String(offer.price))}</span>
      </li>
    `, '');

  return `
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dateTimeStart}">${dateStart}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${pointType} ${he.encode(destination.name)}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateTimeStart}T${timeStart}">${timeStart}</time>
            —
            <time class="event__end-time" datetime="${dateTimeEnd}T${timeEnd}">${timeEnd}</time>
          </p>
          <p class="event__duration">${durationMessage}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${pointPrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersTemplate}
        </ul>
        <button class="event__favorite-btn ${favoriteClass}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `;
}

