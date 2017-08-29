import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { EventService } from '../event.service';
import { Event } from '../event.model';

/**
 * Generated class for the EventForm page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'event-form',
  templateUrl: 'event-form.html'
})
export class EventForm {
  private eventForm: FormGroup;
  formTitle: String;
  event: Event;

  constructor(private formBuilder: FormBuilder, public ev: Events, public navCtrl: NavController, public navParams: NavParams, private es: EventService) {
    if (!!navParams.get('event')) {
      this.event = navParams.get('event');
      this.formTitle = 'Edit Event';
    } else {
      this.event = new Event();
      this.formTitle = 'New Event';
    }
    this.eventForm = this.formBuilder.group({
      title: [this.event.title, Validators.required],
      description: [this.event.description],
      date: [this.event.date],
      location: [this.event.location]
    });
  }

  submitForm() {
    if (this.formTitle === 'New Event') {
      console.log('Creating new event');
      this.createEvent();
    } else {
      console.log('Updating Event');
      this.updateEvent();
    }

  }

  createEvent() {
    this.es.addEvent(this.eventForm.value)
      .subscribe();
    this.navCtrl.pop();
  }

  updateEvent() {
    let updatedEvent = this.eventForm.value;
    this.es.updateEvent(this.event._id, updatedEvent)
      .subscribe();
    this.ev.publish('event:updated', updatedEvent, this.event._id);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('new Event Page loaded');
  }

}
