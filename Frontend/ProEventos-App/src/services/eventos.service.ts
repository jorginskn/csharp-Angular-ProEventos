import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/models/events.model';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  constructor(private http: HttpClient) {}


  getEventosApi(): Observable<Event> {
    return this.http.get<Event>(`https://localhost:7126/api/Eventos`);
  }

}
