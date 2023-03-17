import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, EventosComponent, PalestrantesComponent, NavbarComponent],
  imports: [BrowserModule ,AppRoutingModule, HttpClientModule, BrowserAnimationsModule, CollapseModule.forRoot() ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
