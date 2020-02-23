import { TutorComponent } from './tutor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ArchiveComponent,
  ChatComponent,
  CalendarComponent,
  HomeComponent,
  OthersComponent,
  TasksComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: TutorComponent,
    children: [
      {
        path: 'archive',
        component: ArchiveComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'others',
        component: OthersComponent
      },
      {
        path: 'tasks',
        component: TasksComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
