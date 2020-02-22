import { TutorComponent } from './tutor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, TaksComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: TutorComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'tasks',
        component: TaksComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
