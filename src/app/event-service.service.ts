import { Injectable } from '@angular/core';
import { EventData } from './event';

@Injectable({
	providedIn: 'root'
})
export class EventService {
	private data: EventData[] = [
		{
			date: new Date('2019-03-18'),
			info: 'Lektion'
		},
		{
			date: new Date('2019-03-20'),
			info: 'Lektion'
		},
		{
			date: new Date('2019-03-21'),
			info: 'Fika'
		},
		{
			date: new Date('2019-03-22'),
			info: 'KnowIt'
		},
		{
			date: new Date('2019-03-22'),
			info: 'Dota 2 major i Stockholm'
		},
	]

	constructor() { }

	getData(): EventData[] {
		return this.data;
	}
}
