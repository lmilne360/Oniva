import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventPage} from '../event/event';
import { EventService} from '../event/event-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [EventService]
})
export class HomePage {
 events: Array<any>
  constructor(public navCtrl: NavController, public es: EventService) {
    this.events = es.events;
  }
  ionViewDidLoad() {
    console.log('HomePage Loaded');
  }

  selectEvent(event){
    console.log(event)
    this.navCtrl.push(EventPage, {event});
  }
  
}
