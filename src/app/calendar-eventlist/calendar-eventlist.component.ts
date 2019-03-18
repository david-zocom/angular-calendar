import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-service.service';
import { EventData } from '../event';

@Component({
	selector: 'app-calendar-eventlist',
	templateUrl: './calendar-eventlist.component.html',
	styleUrls: ['./calendar-eventlist.component.css']
})
export class CalendarEventlistComponent implements OnInit {
	eventService: EventService;
	data: EventData[] = null;

	constructor( eventService: EventService ) {
		this.eventService = eventService;
	}

	ngOnInit() {
		this.data = this.eventService.getData();
	}





}
