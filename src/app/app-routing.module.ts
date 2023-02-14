import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TourEventsComponent} from './features/tour-events/tour-events.component';
import {AsyncPipe, DatePipe, JsonPipe, NgForOf, NgIf, TitleCasePipe, UpperCasePipe} from '@angular/common';


const routes: Routes = [
  { path: '', component: TourEventsComponent }
];

@NgModule({
  declarations: [
    TourEventsComponent
  ],
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}), DatePipe, TitleCasePipe, UpperCasePipe, NgForOf, NgIf, AsyncPipe, JsonPipe],
  exports: [RouterModule]
})
export class AppRoutingModule { }
