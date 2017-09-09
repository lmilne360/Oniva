import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { Event } from "./event.model";
import { EventService } from "./event.service";
import { EventForm } from './event-form/event-form';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  event: Event;

  constructor(private eventService: EventService, public ev: Events, public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.get('event');
  }

  ionViewWillEnter() {
    this.ev.unsubscribe('event:updated');
  }

  editEvent(event) {
    this.navCtrl.push(EventForm, { event });
    this.ev.subscribe('event:updated', (updated, id) => {
      this.event = updated;
      this.event._id = id;
      console.log("Updated Event:", this.event);
	});
  }

  deleteEvent(event) {
    this.eventService.deleteEvent(event._id)
      .subscribe(err => console.log(err));
    this.navCtrl.pop();
  }

}
