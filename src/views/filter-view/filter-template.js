import { FILTER_OPTIONS } from '../../const.js';

export function createTemplate(filters, currentFilter) {
  const filterTemplate = FILTER_OPTIONS.map((option) => {
    const filterName = option.name;

    return `
      <div class="trip-filters__filter">
        <input class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
          id="filter-${filterName}"
          value="${filterName}"
          ${filters[filterName] ? '' : 'disabled'}
          ${option.name === currentFilter ? 'checked' : ''}>
        <label class="trip-filters__filter-label" for="filter-${filterName}">
          ${filterName}
        </label>
      </div>
    `;
  }).join('');

  return `
    <form class="trip-filters" action="#" method="get">
      ${filterTemplate}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
}

