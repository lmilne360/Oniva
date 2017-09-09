import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';


@Injectable()
export class EventService {

  constructor(private http: Http) {}

  getEvents(): Observable<any> {
    return this.http.get('api/events')
      .map(res => res.json());
  }

  addEvent(newEvent): Observable<any> {
    const headers = new Headers();
    console.log("Adding Event: ", newEvent);
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/events', JSON.stringify(newEvent), { headers: headers })
      .map(res => res.json());
  }

  updateEvent(id, event): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('api/events/' + id, JSON.stringify(event), { headers: headers })
      .map(res => res.json());
  }

  deleteEvent(id): Observable<any> {
    console.log('Deleting item with id: ', id);
    return this.http.delete('api/events/' + id)
      .map(res => res.json());
  }

}
