import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ITourEvent} from '../models/tour-event.interface';

@Injectable({
  providedIn: 'root'
})
export class TourEventsService {

  private _eventsPath = 'tour-events';

  constructor(
    private _httpClient: HttpClient
  ) {}

  getEvents(){
    return this._httpClient.get<ITourEvent[]>('http://localhost:1337/api/' + this._eventsPath);
  }
}
