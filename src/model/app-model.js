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
  async ready(){
    // TODO get server data
    this._points = points;
    this._destinations = destinations;
    this._offerGroups = offers;
  }

  /**
   * @returns {Array<PointModel>}
   */
  getPoints() {
    return this._points.map((point) => new PointModel(point));
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

