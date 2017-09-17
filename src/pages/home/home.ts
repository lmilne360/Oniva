import { Component } from '@angular/core';
import { NavController, IonicPage} from 'ionic-angular';


import { Observable } from 'rxjs/Observable';
import { EventService } from '../../services/event.service';


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


  getEvents(refresher?) {
    this.eventService.getEvents()
      .subscribe(data => {
        this.events = data;
        refresher && refresher.complete();
      }, err => {
        console.log(err);
        refresher && refresher.complete();
      });
  }

}
