import Presenter from './presenter.js';

/**
 * @typedef {import('../view/filter-view').default} View
 * @typedef {import('../model/app-model').default} Model
 *
 * @extends {Presenter<View, Model>}
 */
class FilterPresenter extends Presenter {
  /**
   * @param {[View, Model]} rest
   */
  constructor(...rest) {
    super(...rest);

    // this.view.addEventListener('change', this.onViewChange.bind(this));
  }

  /**
   * @override
   */
  updateView() {
    /**
     * @type {Array<FilterType>}
     */
    const values = ['everything', 'future', 'present', 'past'];
    const items = values.map((value) => ({
      value,
      isSelected: value === 'everything',
      isDisabled: value === 'future'
    }));

    this.view.setState({items});
  }
}

export default FilterPresenter;

