import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventPage } from './event';
import { MomentModule } from 'angular2-moment';



@NgModule({
  declarations: [
    EventPage
  ],
  imports: [
    IonicPageModule.forChild(EventPage),
    MomentModule

  ]
})
export class EventPageModule {}
