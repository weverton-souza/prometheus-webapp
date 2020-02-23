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
import { VerticalPanelComponent } from '@views/shared-components';

@NgModule({
  declarations: [
    ArchiveComponent,
    CalendarComponent,
    ChatComponent,
    HomeComponent,
    OthersComponent,
    TasksComponent,
    TutorComponent,
    VerticalPanelComponent
  ],
  imports: [
    CommonModule,
    TutorRoutingModule,
  ]
})
export class TutorModule { }
