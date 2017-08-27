import { Component, OnInit, OnChanges } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { EventPage } from '../event/event';
import { EventService } from '../event/event.service';
import { NewEventPage } from '../new-event/new-event'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [EventService]
})
export class HomePage implements OnChanges, OnInit {
  events: Array<any>
  constructor(public navCtrl: NavController, public es: EventService) {
    this.getEvents();
  }

  ionViewDidLoad() {
    console.log(' HOMEPAGE');
  }
  ionViewWillEnter(){
    console.log("getting events")
    this.getEvents()

  }
  ngOnInit() {
    console.log("init")
  }

  ngOnChanges() {
    console.log('change')
    this.getEvents();
  }

  selectEvent(event) {
    console.log("selected " + event.title)
    this.navCtrl.push(EventPage, { event });
  }

  newEvent() {
    this.navCtrl.push(NewEventPage)
  }

  getEvents() {
    this.events = this.es.getEvents();
  }

}
