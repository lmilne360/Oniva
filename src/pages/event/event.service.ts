import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

  /** events: Array<Event> = [
    new Event("Tiki Birthday", new Date().toISOString(), "A birthday party for our dear friend tiki"),
    { title: "Drinks", date: new Date().toISOString(), description: "Time to get wasted" },
    { title: "Lunch Special", date: new Date().toISOString(), description: "Food, glorious food" },
    { title: "Gaming event", date: new Date().toISOString() }
  ] */

  constructor(public http: Http) {
    console.log(' Event Servive initialized...')
  }

  getEvents() {
    return this.http.get('api/events')
      .map(res => res.json());
  }

  addEvent(newEvent) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/events', JSON.stringify(newEvent), { headers: headers })
      .map(res => res.json());
  }

  updateStatus(event) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/events/' + event._id, JSON.stringify(event), { headers: headers })
      .map(res => res.json());
  }

  deleteEvent(id) {
    return this.http.delete('/api/events/' + id)
      .map(res => res.json());
  }

}