import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { Event } from "./event.model";
import { EventService } from "./event.service";
import { UserService } from '../../services/user.service';



@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  event: Event;
  currentUser;

  constructor(private userServive: UserService, private eventService: EventService, public ev: Events, public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.get('event');
    this.userServive.getUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

  ionViewWillEnter() {
    this.ev.unsubscribe('event:updated');
  }

  editEvent(event) {
    event.uid = this.currentUser.uid;
    this.navCtrl.push('EventForm', { event });
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
