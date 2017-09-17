import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Event } from '../event/event.model';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { EventService } from '../../services/event.service';

/**
 * Generated class for the MyEventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-events',
  templateUrl: 'my-events.html'
})
export class MyEventsPage {
  myEvents: Observable<Array<Event>>;
  currentUser;

  constructor(private userService: UserService, private eventService: EventService, public navCtrl: NavController, public navParams: NavParams) {
    this.userService.getUser()
    .subscribe((user)=>{
      this.currentUser = user;
    });
  }

  ionViewWillEnter() {
    this.myEvents = this.eventService.getMyEvents(this.currentUser.uid);
  }

  newEvent() {
    this.navCtrl.push('EventForm');
  }

  selectEvent(event) {
    this.navCtrl.push('EventPage', { event });
  }

}
