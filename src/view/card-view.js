import View from './view.js';
import {
  formatTime,
  formatDate,
  formatDuration,
  html, formatNumber
} from '../util.js';

/**
 * @typedef {import('./list-view').ItemState} State
 *
 * @extends {View<State>}
 */
class CardView extends View {
  constructor() {
    super();
    // this.classList.add('trip-info');
  }

  createHtml() {
    return html`
      <div class="event">
        ${this.createStartDataHtml()}
        ${this.createTypeIconHtml()}
        ${this.createDestinationHtml()}
        ${this.createScheduleHtml()}
        ${this.createPriceHtml()}
        ${this.createOfferListHtml()}
        ${this.createFavoriteButtonHtml()}
        ${this.createOpenButtonHtml()}
      </div>
    `;
  }

  createStartDataHtml() {
    const {dateFrom} = this.state;
    return html`
      <time class="event__date"
            datetime="${dateFrom}">${formatDate(dateFrom)}
      </time>
    `;
  }

  createTypeIconHtml() {
    const {types} = this.state;
    const currentType = types.find((type) => type.isSelected).value;
    return html`
      <div class="event__type">
        <img alt="Event currentType icon"
             class="event__type-icon"
             height="42"
             src="img/icons/${currentType}.png"
             width="42" ${currentType}>
      </div>
    `;
  }

  createDestinationHtml() {
    const {types, destinations} = this.state;
    const currentType = types.find((type) => type.isSelected).value;
    const currentDestination = destinations.find((destination) => destination.isSelected)?.name;
    return html`
      <h3 class="event__title">${currentType} ${currentDestination}</h3>
    `;
  }

  createScheduleHtml() {
    const {dateFrom, dateTo} = this.state;
    return html`
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time"
                datetime="${dateFrom}">${formatTime(dateFrom)}
          </time>
          —
          <time class="event__end-time"
                datetime="${dateTo}">${formatTime(dateTo)}
          </time>
        </p>
        <p class="event__duration">${formatDuration(dateFrom, dateTo)}</p>
      </div>
    `;
  }

  createPriceHtml() {
    const {basePrice} = this.state;
    return html`
      <p class="event__price">
        €&nbsp;<span class="event__price-value">${formatNumber(basePrice)}</span>
      </p>
    `;
  }

  createOfferListHtml() {
    const {offers} = this.state;
    const currentOffers = offers.filter((offer) => offer.isSelected);
    if (!currentOffers) {
      return '';
    }

    return html`
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${currentOffers.map((offer) => html`
          <li class="event__offer">
            <span class="event__offer-title">${offer.title}</span>
            +€&nbsp;
            <span class="event__offer-price">${offer.price}</span>
          </li>
        `)}
      </ul>
    `;
  }

  createFavoriteButtonHtml() {
    return html`
      <button class="event__favorite-btn event__favorite-btn--active" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path
            d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
    `;
  }

  createOpenButtonHtml() {
    return html`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `;
  }
}

customElements.define('card-view', CardView);

export default CardView;

