import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventForm } from './event-form';
import { MdDatepickerModule, MdFormFieldModule, MdInputModule, MdNativeDateModule  } from "@angular/material";

@NgModule({
  declarations: [
    EventForm
  ],
  imports: [
    IonicPageModule.forChild(EventForm),
    MdDatepickerModule,
    MdFormFieldModule,
    MdInputModule,
    MdNativeDateModule
  ],
  exports: [
    EventForm
  ]
})
export class EventFormModule {}
