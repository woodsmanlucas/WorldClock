import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Clock } from './ClockDirective';
import { choose_city } from './ChooseCityDirective'
import { timePipe } from './app.timePipe';
import { routing }        from './app.routing';
import {third } from './3rdDirective';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, Clock, choose_city, timePipe, third
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
