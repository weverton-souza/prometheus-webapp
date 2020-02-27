import { NgModule } from '@angular/core';
import { VerticalPanelComponent } from './vertical-panel/vertical-panel.component';
import { PanelTitleComponent } from './panel-title/panel-title.component';
import { PanelBodyComponent } from './panel-body/panel-body.component';
import { SharedModule } from '@shared/shared.module';
import { QuizComponent } from './tasks/quiz/quiz.component';

@NgModule({
  declarations: [VerticalPanelComponent, PanelTitleComponent, PanelBodyComponent, QuizComponent],
  imports: [
    SharedModule,
  ],
  exports: [
    VerticalPanelComponent,
    PanelTitleComponent,
    PanelBodyComponent,
    QuizComponent
  ]
})
export class SharedComponentsModule { }
