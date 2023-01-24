import HeaderView from './view/header-view.js';
import FilterView from './view/filter-view.js';
import {render} from './render.js';
import EventPresenter from './presenter/event-presenter.js';

const tripEventsElement = document.querySelector('.trip-events');
const eventPresenter = new EventPresenter({eventContainer: tripEventsElement});

render(new HeaderView(), document.body, 'afterbegin');
render(new FilterView(), tripEventsElement);

eventPresenter.init();
