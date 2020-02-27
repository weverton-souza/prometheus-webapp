import { ActivitiesComponent } from './pages/activities/activities.component';
import { SharedComponentsModule } from './../shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorRoutingModule } from './tutor.routing';
import { TutorComponent } from './tutor.component';
import {
  ArchiveComponent,
  ChatComponent,
  HomeComponent,
  OthersComponent,
  TasksComponent,
  CalendarComponent,
} from './pages';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ArchiveComponent,
    CalendarComponent,
    ChatComponent,
    HomeComponent,
    OthersComponent,
    ActivitiesComponent,
    TasksComponent,
    TutorComponent
  ],
  imports: [
    SharedModule,
    TutorRoutingModule,
    SharedComponentsModule
  ]
})
export class TutorModule { }
