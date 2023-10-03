import Presenter from './presenter.js';

/**
 * @typedef {import('../view/add-button-view').default} View
 * @typedef {import('../model/app-model').default} Model
 *
 * @extends {Presenter<View, Model>}
 */
class AddButtonPresenter extends Presenter {
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
    this.view.render();
  }
}

export default AddButtonPresenter;

