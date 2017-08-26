import { Injectable } from '@angular/core';
import { Event } from './event-model';
@Injectable()
export class EventService{

  events: Array<Event> = [
   new Event("Tiki Birthday",  new Date().toISOString(), "A birthday party for our dear friend tiki"),
    {title: "Drinks", date: new Date().toISOString(), description: "Time to get wasted"},
    {title: "Lunch Special", date: new Date().toISOString(), description: "Food, glorious food"},
    {title: "Gaming event", date: new Date().toISOString()}
    ]

  constructor () {}

  addEvent(event){
    this.events.push(event)
  }

  removeEvent(event){
    const index = this.events.indexOf(event)
    if (index !== -1){
      this.events.splice(index, 1);
    }
  }

}