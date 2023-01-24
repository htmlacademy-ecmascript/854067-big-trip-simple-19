import EventsListView from '../view/events-list-view.js';
import EventsItemView from '../view/events-item-view.js';
import SortView from '../view/sort-view.js';
import NewPointView from '../view/new-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import EventPointView from '../view/event-point-view.js';
import {render} from '../render.js';

export default class EventPresenter {
  eventComponent = new EventsListView();
  eventListComponent = new EventsItemView();

  constructor({eventContainer}) {
    this.eventContainer = eventContainer;
  }

  init() {
    render(this.eventComponent, this.eventContainer);
    render(new SortView(), this.eventComponent.getElement());
    render(this.eventListComponent, this.eventComponent.getElement());
    render(new NewPointView(), this.eventListComponent.getElement());
    render(new EditPointView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventPointView(), this.eventListComponent.getElement());
    }
  }
}
