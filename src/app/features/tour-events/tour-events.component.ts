import {Component, OnInit} from '@angular/core';
import {TourEventsService} from '../../core/services/tour-events.service';

@Component({
  selector: 'app-tour-events',
  templateUrl: './tour-events.component.html',
  styleUrls: ['./tour-events.component.scss']
})
export class TourEventsComponent implements OnInit{

  public events: any;
  public events$ = this.eventService.getEvents();

  constructor(private eventService: TourEventsService) {
  }

  public ngOnInit() {
    this.getEvents();
  }

  public getEvents(): void {
    this.eventService.getEvents().subscribe((response) => {
      this.events = response['data'];
      console.log(this.events);
    });
  }

}
