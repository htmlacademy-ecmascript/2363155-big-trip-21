import './view/brief-view.js';
import './view/filter-view.js';
import './view/add-button-view.js';
import './view/sort-view.js';
import './view/list-view.js';

import AppModel from './model/app-model.js';

import BriefPresenter from './presenter/brief-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import AddButtonPresenter from './presenter/add-button-presenter.js';
import SortPresenter from './presenter/sort-presenter.js';
import ListPresenter from './presenter/list-presenter.js';

const appModel = new AppModel();

appModel.ready()
  .then(() => {
    new BriefPresenter(document.querySelector('brief-view'), appModel);
    new FilterPresenter(document.querySelector('filter-view'), appModel);
    new AddButtonPresenter(document.querySelector('add-button-view'), appModel);
    new SortPresenter(document.querySelector('sort-view'), appModel);
    new ListPresenter(document.querySelector('list-view'), appModel);
  });

