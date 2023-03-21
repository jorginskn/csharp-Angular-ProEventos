import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/services/eventos.service';
import { Event } from '../models/events.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  events?: Event[];
  widhtImage:number = 50;
  heightImage: number = 110;
  marginImage: number = 5;
  showImage: boolean = true;

  constructor(private event: EventosService) {}

  ngOnInit(): void {
    this.getEventos();
  }

  ShowImage(){
    this.showImage = !this.showImage
  }

  getEventos() {
    this.event.getEventosApi().subscribe((res: any) => {
      this.events = res;

    });
  }
}
