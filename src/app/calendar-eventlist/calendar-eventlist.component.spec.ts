import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventlistComponent } from './calendar-eventlist.component';

describe('CalendarEventlistComponent', () => {
  let component: CalendarEventlistComponent;
  let fixture: ComponentFixture<CalendarEventlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEventlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
