import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private es: EventService) {
   /** this.eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    }); */

    this.eventForm = this.formBuilder.group( new Event(), Validators.required);
    
  }

  createEvent(){
    this.es.addEvent(this.eventForm.value);
    this.navCtrl.pop()
  }

  ionViewDidLoad() {
    console.log('new Event Page loaded');
  }

}
