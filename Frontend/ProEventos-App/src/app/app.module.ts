import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [AppComponent, EventosComponent, PalestrantesComponent, NavbarComponent],
  imports: [BrowserModule ,AppRoutingModule, HttpClientModule, BrowserAnimationsModule, CollapseModule.forRoot(),FormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
