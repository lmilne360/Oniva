import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';


@Injectable()
export class EventService {

  constructor(private http: Http) {
    console.log(' Event Servive initialized...')
  }

  getEvents() {
    return this.http.get('api/events')
      .map(res => res.json());
  }

  addEvent(newEvent) {
    var headers = new Headers();
    console.log("EServive: ", newEvent)
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/events', JSON.stringify(newEvent), { headers: headers })
      .map(res => res.json())
  }

  updateEvent(id, event) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('api/events/' + id, JSON.stringify(event), { headers: headers })
      .map(res => res.json());
  }

  deleteEvent(id) {
    console.log(id)
    return this.http.delete('api/events/' + id)
      .map(res => res.json())
  }

}