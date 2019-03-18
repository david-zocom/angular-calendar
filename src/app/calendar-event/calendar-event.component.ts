import { Component, OnInit, Input } from '@angular/core';
import { EventData } from '../event';

@Component({
	selector: 'app-calendar-event',
	templateUrl: './calendar-event.component.html',
	styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {
	@Input() eventData: EventData;

	constructor() { }

	ngOnInit() { }

}
