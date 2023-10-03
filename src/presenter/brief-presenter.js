import Presenter from './presenter.js';

/**
 * @typedef {import('../view/brief-view').default} View
 * @typedef {import('../model/app-model').default} Model
 *
 * @extends {Presenter<View, Model>}
 */
class BriefPresenter extends Presenter {
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

export default BriefPresenter;

