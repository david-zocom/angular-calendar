import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { CalendarEventlistComponent } from './calendar-eventlist/calendar-eventlist.component';
import { EventService } from './event-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarEventComponent,
    CalendarEventlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
