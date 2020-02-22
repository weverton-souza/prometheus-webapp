import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor.routing';
import { TutorComponent } from './tutor.component';
import { HomeComponent } from './pages/home/home.component';
import { TaksComponent } from './pages/taks/taks.component';


@NgModule({
  declarations: [TutorComponent, HomeComponent, TaksComponent],
  imports: [
    CommonModule,
    TutorRoutingModule
  ]
})
export class TutorModule { }
