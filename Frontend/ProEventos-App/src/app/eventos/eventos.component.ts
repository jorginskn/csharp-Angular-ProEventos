import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  eventos : any


  constructor() {}

  ngOnInit(): void {
    this.getEventos()
  }

  getEventos() {

    this.eventos = [
      {
        Tema: 'Angular',
        Local: 'Belo horizonte',
      },
      {
        Tema: 'React',
        Local: 'Brasília',
      },
      {
        Tema: 'Vue.Js',
        Local: 'Sp',
      },
    ];
  }
}
