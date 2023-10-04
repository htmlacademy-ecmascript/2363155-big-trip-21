import View from './view.js';
import {html} from '../util.js';

/**
 * @typedef {{
 *  value: FilterType
 *  isSelected: boolean
 *  isDisabled: boolean
 * }} ItemState
 *
 * @typedef {{
 *  items: Array<ItemState>
 * }} State
 *
 * @extends {View<State>}
 */
class FilterView extends View {
  constructor() {
    super();
    this.classList.add('trip-filters');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      ${this.state.items.map((item) => html`
        <div class="trip-filters__filter">
          <input class="trip-filters__filter-input  visually-hidden"
                 id="filter-${item.value}"
                 name="trip-filter"
                 type="radio"
                 value="${item.value}"
                 ${item.isSelected ? 'checked' : ''}
                 ${item.isDisabled ? 'disabled' : ''}
          >
          <label class="trip-filters__filter-label"
                 for="filter-${item.value}"
          >${item.value}
          </label>
        </div>
      `)}
    `;
  }
}

customElements.define('filter-view', FilterView);
export default FilterView;

