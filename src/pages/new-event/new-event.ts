import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import {EventService} from '../event/event.service';
import {Event} from '../event/event.model';

/**
 * Generated class for the NewEventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
  providers: [EventService]
})
export class NewEventPage {
  private eventForm: FormGroup;
  formTitle: String;
   event: Event;

  constructor(private formBuilder: FormBuilder, public ev: Events, public navCtrl: NavController, public navParams: NavParams, private es: EventService) {
    if (!!navParams.get('event')){
      this.event = navParams.get('event');
      this.formTitle = 'Edit Event';
    } else {
      this.event = new Event()
      this.formTitle = 'New Event';
    };
    this.eventForm = this.formBuilder.group({
      title: [this.event.title, Validators.required],
      description: [this.event.description],
      date: [this.event.date]
    });
    //this.eventForm = this.formBuilder.group( event, Validators.required);
    
  }

  submitForm(){
    if(this.formTitle === 'New Event'){
      console.log('Creating new event');
      this.createEvent()
    } else {
      console.log('Updating Event')
      this.updateEvent()
    }

  }

  createEvent(){
    this.es.addEvent(this.eventForm.value)
    .subscribe();
    this.navCtrl.pop()
  }

  updateEvent(){
    let updatedEvent = this.eventForm.value;
    this.es.updateEvent(this.event._id, updatedEvent)
    .subscribe()
    this.ev.publish('event:updated', updatedEvent)
    this.navCtrl.pop()
  }

  ionViewDidLoad() {
    console.log('new Event Page loaded');
  }

}
