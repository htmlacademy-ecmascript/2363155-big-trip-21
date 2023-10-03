import Presenter from './presenter.js';

/**
 * @typedef {import('../views/list-view').default} View
 * @typedef {import('../models/app-model').default} Model
 *
 * @extends {Presenter<View, Model>}

 * export default class PointView extends AbstractView {
  #point = null;
  #pointDestination = null;
  #pointOffers = null;
  #handleEditClick = null;

  constructor({ point = POINT_EMPTY, pointDestination, pointOffers, onEditClick }) {
    super();
    this.#point = point;
    this.#pointDestination = pointDestination;
    this.#pointOffers = pointOffers;
    this.#handleEditClick = onEditClick; // метод вызова формы редактирования

    this.element.querySelector('.event__rollup-btn') // находим кнопку в элементе
      .addEventListener('click', this.#editClickHandler); // вешаем обработчик
  }

 */
class ListPresenter extends Presenter {
  /**
   * @param {[View, Model]} rest
   */
  constructor(...rest) {
    super(...rest);
    this.view.addEventListener('open', this.onViewOpen.bind(this));
    this.view.addEventListener('close', this.onViewClose.bind(this));
  }

  /**
   * @override
   */
  updateView() {
    const params = this.navigation.getParams();
    const points = this.model.getPoints();
    const destinations = this.model.getDestinations();
    const offerGroups = this.model.getOfferGroups();

    const items = points.map((point) => {
      const {offers} = offerGroups.find((group) => group.type === point.type);
      return {
        id: point.id,

        types: offerGroups.map((group) => ({
          value: group.type,
          isSelected: group.type === point.type
        })),

        destinations: destinations.map((destination) => ({
          ...destination,
          isSelected: destination.id === point.destinationId
        })),

        dateFrom: point.dataFrom,
        dateTo: point.dataTo,
        basePrice: point.basePrice,

        offers: offers.map((offer) => ({
          ...offer,
          isSelected: point.offerIds?.includes(offer.id)
        })),

        isFavorite: point.isFavorite,
        isEditable: params.edit === point.id
      };
    });

    this.view.setState({items});
  }

  /**
   * @param {CustomEvent & {
   *    target: import('../view/card-view').default
   * }} event
   */
  onViewOpen(event) {
    const params = this.navigation.getParams();
    params.edit = event.target.state.id;
    this.navigation.setParams(params);
  }

  onViewClose() {
    const params = this.navigation.getParams();
    delete params.edit;
    this.navigation.setParams(params);
  }
}

export default ListPresenter;

