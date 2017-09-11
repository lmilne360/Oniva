import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

//import { EventPage } from '../event/event';
import { EventService } from '../event/event.service';
import { EventForm } from '../event/event-form/event-form';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events: Observable<Array<Event>>;
  constructor(public navCtrl: NavController, public eventService: EventService) {}


  ionViewWillEnter() {
    this.getEvents();
  }

  selectEvent(event) {
    this.navCtrl.push('EventPage', { event });
  }

  newEvent() {
    this.navCtrl.push(EventForm);
  }

  getEvents() {
    this.eventService.getEvents()
      .subscribe(data => {
        this.events = data;
      }, err => {
        console.log(err);
      });
  }


}
