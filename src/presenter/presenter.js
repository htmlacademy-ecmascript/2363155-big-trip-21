import navigation from '../navigation.js';

/**
 * @template {import('../view/view').default} View
 * @template {import('../model/model').default} Model
 */
class Presenter {

  /**
   * @param {View} view
   * @param {Model} model
   */
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.navigation = navigation;
    this.navigation.addEventListener('change', this.onNavigationChange.bind(this));

    window.queueMicrotask(this.onReady.bind(this));
  }

  /**
   * @abstract
   */
  updateView() {}

  onNavigationChange() {
    this.updateView();
  }

  onReady() {
    this.updateView();
  }
}

export default Presenter;

