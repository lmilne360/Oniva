import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { EventPage } from '../event/event';
import { EventService } from '../event/event.service';
import { EventForm } from '../event/event-form/event-form';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events: Event[];
  constructor(public navCtrl: NavController, public eventService: EventService) { }

  ionViewWillEnter() {
    console.log('entered');
    this.getEvents();
  }

  selectEvent(event) {
    console.log("selected " + event.title);
    this.navCtrl.push(EventPage, { event });
  }

  newEvent() {
    this.navCtrl.push(EventForm);
  }


  getEvents() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
      }, err => {
        console.log("Error occured");
      });
  }


}
