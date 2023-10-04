import AbstractView from '../../framework/view/abstract-view.js';
import { createTemplate } from './new-point-button-template.js';

export default class NewPointButtonView extends AbstractView {
  #handleButtonClick = null;

  constructor({ onClick }) {
    super();
    this.#handleButtonClick = onClick;
    this.element.addEventListener('click', this.#buttonClickHandler);
  }

  get template() {
    return createTemplate();
  }

  #buttonClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleButtonClick();
  };
}

