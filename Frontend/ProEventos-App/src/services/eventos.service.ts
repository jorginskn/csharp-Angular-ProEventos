import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  getEventosApi(){
    this.http.get('https://localhost:5001/api/eventos')
  }

}




