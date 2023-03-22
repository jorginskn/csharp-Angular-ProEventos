import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/services/eventos.service';
import { Event } from '../models/events.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  events?: Event[];
  eventFilter: any;
  widhtImage: number = 50;
  heightImage: number = 110;
  marginImage: number = 5;
  showImage: boolean = true;
  private _filtroLista: string = '';

  constructor(private event: EventosService) {}

  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventFilter = this.filtroLista
      ? this.filtrarEventos(this.filtroLista)
      : this.events;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();

    return (this.events = this.events?.filter(
      (event: any) =>
        event.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        event.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    ));
  }

  ngOnInit(): void {
    this.getEvents();
  }

  ShowImage() {
    this.showImage = !this.showImage;
  }

  getEvents() {
    this.event.getEventosApi().subscribe((res: any) => {
      this.eventFilter = res;
      this.events = res;
    });
  }
}
