import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventForm } from './event-form';

@NgModule({
  declarations: [
    EventForm
  ],
  imports: [
    IonicPageModule.forChild(EventForm)
  ],
  exports: [
    EventForm
  ]
})
export class EventFormModule {}
