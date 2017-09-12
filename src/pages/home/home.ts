import { Component } from '@angular/core';
import { NavController, IonicPage} from 'ionic-angular';

import { EventService } from '../event/event.service';
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
    this.navCtrl.push('EventForm');
  }

  getEvents(refresher?) {
    this.eventService.getEvents()
      .subscribe(data => {
        this.events = data;
        if (refresher) {refresher.complete();}
      }, err => {
        console.log(err);
      });
  }

}
