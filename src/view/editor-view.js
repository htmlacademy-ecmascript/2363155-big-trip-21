import './editor-view.css';
import View from './view.js';
import {html} from '../util.js';

/**
 * @typedef {import('./list-view').ItemState} State
 *
 * @extends {View<State>}
 */
class EditorView extends View {
  constructor() {
    super();
    // this.classList.add('trip-info');
  }

  createHtml() {
    return html`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${this.createTypeFieldHtml()}
          ${this.createDestinationFieldHtml()}
          ${this.createScheduleFieldHtml()}
          ${this.createPriceFieldHtml()}
          ${this.createSubmitButtonHtml()}
          ${this.createResetButtonHtml()}
          ${this.createCloseButtonHtml()}
        </header>

        <section class="event__details">
          ${this.createOfferListHtml()}
          ${this.createDestinationHtml()}
        </section>
      </form>
    `;
  }

  createTypeFieldHtml() {
    const {types} = this.state;
    const currentTypeValue = types.find((type) => type.isSelected).value;
    return html`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img
            alt="Event ${currentTypeValue} icon"
            class="event__type-icon"
            height="17"
            src="img/icons/${currentTypeValue}.png"
            width="17"
          >
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            ${types.map((type) => html`
              <div class="event__type-item">
                <input
                  class="event__type-input  visually-hidden"
                  id="event-type-${type.value}-1"
                  name="event-type"
                  type="radio"
                  value="${type.value}"
                  ${type.isSelected ? 'checked' : ''}
                >
                <label
                  class="event__type-label  event__type-label--${type.value}"
                  for="event-type-${type.value}-1"
                >
                  ${type.value}
                </label>
              </div>
            `)}
          </fieldset>
        </div>
      </div>
    `;
  }

  createDestinationFieldHtml() {
    const {types, destinations} = this.state;
    return html`
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${types.find((type) => type.isSelected).value}
        </label>

        <input class="event__input  event__input--destination"
               id="event-destination-1"
               type="text"
               name="event-destination"
               value="${destinations.find((destination) => destination.isSelected)?.name}"
               list="destination-list-1"
        >

        <datalist id="destination-list-1">
          ${destinations.map((destination) => html`
            <option value="${destination.name}"></option>
          `)}
        </datalist>
      </div>
    `;
  }

  createScheduleFieldHtml() {
    const {dateFrom, dateTo} = this.state;
    return html`
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time"
               id="event-start-time-1"
               name="event-start-time"
               type="text"
               value="${dateFrom}"
        >
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time"
               id="event-end-time-1"
               name="event-end-time"
               type="text"
               value="${dateTo}"
        >
      </div>
    `;
  }

  createPriceFieldHtml() {
    const {basePrice} = this.state;
    return html`
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input class="event__input  event__input--price"
               id="event-price-1"
               type="text"
               name="event-price"
               value="${basePrice}"
        >
      </div>
    `;
  }

  createSubmitButtonHtml() {
    return html`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `;
  }

  createResetButtonHtml() {
    return html`
      <button class="event__reset-btn" type="reset">Cancel</button>
    `;
  }

  createCloseButtonHtml() {
    return html`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `;
  }

  createOfferListHtml() {
    const {offers} = this.state;
    if (offers.length < 1) {
      return '';
    }

    return html`
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${offers.map((offer) => html`
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden"
                     id="${offer.id}"
                     name="event-offer"
                     type="checkbox"
                     value="${offer.id}"
                     ${offer.isSelected ? 'checked' : ''}
              >

              <label class="event__offer-label"
                     for="${offer.id}"
              >
                <span class="event__offer-title">${offer.title}</span>
                +€&nbsp;
                <span class="event__offer-price">${offer.price}</span>
              </label>
            </div>
          `)}
        </div>
      </section>
    `;
  }

  createDestinationHtml() {

    const {destinations} = this.state;
    const selectedDestination = destinations.find((destination) => destination.isSelected);
    if (!selectedDestination) {
      return '';
    }

    return html`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${selectedDestination.description}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${selectedDestination.pictures.map((picture) => html`
              <img class="event__photo" src="${picture.src}" alt="${picture.description}">
            `)}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('editor-view', EditorView);
export default EditorView;


