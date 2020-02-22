import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorRoutingModule } from './tutor.routing';
import { TutorComponent } from './tutor.component';
import {
  ArchiveComponent,
  ChatComponent,
  HomeComponent,
  OthersComponent,
  TaksComponent,
  CalendarComponent,
} from './pages';

@NgModule({
  declarations: [
    ArchiveComponent,
    CalendarComponent,
    ChatComponent,
    HomeComponent,
    OthersComponent,
    TaksComponent,
    TutorComponent,
  ],
  imports: [
    CommonModule,
    TutorRoutingModule,
  ]
})
export class TutorModule { }
