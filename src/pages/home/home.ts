import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EventPage } from '../event/event';
import { EventService } from '../event/event.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [EventService]
})
export class HomePage implements OnInit {
  events: Array<any>
  constructor(public navCtrl: NavController, public es: EventService) { }

  ngOnInit() {
    this.events = this.es.getEvents();
  }

  selectEvent(event) {
    console.log("selected " + event.title)
    this.navCtrl.push(EventPage, { event });
  }

}
