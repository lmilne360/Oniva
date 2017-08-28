import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { EventPage } from '../event/event';
import { EventService } from '../event/event.service';
import { NewEventPage } from '../new-event/new-event'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events: Event[];
  constructor(public navCtrl: NavController, public eventService: EventService) {
    //this.getEvents();
  }

  ionViewWillEnter() {
    this.getEvents();
  }

  selectEvent(event) {
    console.log("selected " + event.title)
    this.navCtrl.push(EventPage, { event });
  }

  newEvent() {
    this.navCtrl.push(NewEventPage)
  }

  getEvents() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
      });
  }

}
