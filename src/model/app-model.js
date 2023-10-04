import Model from './model.js';
import points from '../data/poins.json';
import offers from '../data/offers.json';
import destinations from '../data/destinations.json';
import PointModel from './point-model.js';

class AppModel extends Model {

  constructor() {
    super();

    /**
     * @type {Array<Point>}
     */
    this._points = [];

    /**
     * @type {Array<Destination>}
     */
    this._destinations = [];

    /**
     * @type {Array<OfferGroup>}
     */
    this._offerGroups = [];
  }

  /**
   * @returns {Promise<void>}
   */
  async ready() {
    // TODO get server data
    // @ts-ignore
    this._points = points;
    // @ts-ignore
    this._destinations = destinations;
    // @ts-ignore
    this._offerGroups = offers;
  }

  /**
   * @returns {Array<PointModel>}
   */
  getPoints() {
    return this._points.map(this.createPoint);
  }

  /**
   * @param {Point} data
   * @returns {PointModel}
   */
  createPoint(data = Object.create(null)) {
    return new PointModel(data);
  }

  /**
   * @param {PointModel} model
   * @returns {Promise<void>}
   */
  async updatePoint(model) {
    //TODO: Обновить данные на сервере
    const data = model.toJSON();
    const index = this._points.findIndex((point) => point.id === data.id);
    this._points.splice(index, 1, data);
  }

  /**
   * @returns {Array<Destination>}
   */
  getDestinations() {
    return structuredClone(this._destinations);
  }

  /**
   * @returns {Array<OfferGroup>}
   */
  getOfferGroups() {
    return structuredClone(this._offerGroups);
  }
}

export default AppModel;

