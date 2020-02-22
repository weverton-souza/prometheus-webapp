import { ViewsComponent } from './views.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
        {
            path: 'tutor',
            loadChildren: 'src/app/views/tutor/tutor.module#TutorModule'
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
