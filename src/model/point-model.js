import Model from './model.js';

class PointModel extends Model {

  /**
   * @param {Point} point
   */
  constructor(point) {
    super();

    this.id = point.id;
    this.basePrice = point.base_price;
    this.dataFrom = new Date(point.date_from);
    this.dataTo = new Date(point.date_to);
    this.destinationId = point.destination;
    this.isFavorite = point.is_favorite;
    this.offerIds = structuredClone(point.offers);
    this.type = point.type;
  }
}

export default PointModel;

