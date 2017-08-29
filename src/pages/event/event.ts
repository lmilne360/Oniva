import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { Event } from "./event.model";
import { EventService } from "./event.service";
import { EventForm } from './event-form/event-form';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  event: Event;

  constructor(private eventService: EventService, public ev: Events, public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.get('event');
    ev.subscribe('event:updated', (updated, id) => {
      console.log("TRIGGERED", updated);
      this.event = updated;
      this.event._id = id;
      ev.unsubscribe;
    });
  }

  editEvent(event) {
    console.log('Pushing event to edit');
    this.navCtrl.push(EventForm, { event });
  }

  deleteEvent(event) {
    console.log('Deleting event');
    this.eventService.deleteEvent(event._id)
      .subscribe(err => console.log(err));
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('EventPage Loaded');
  }

}
