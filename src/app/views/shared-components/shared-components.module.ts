import { NgModule } from '@angular/core';
import { VerticalPanelComponent } from './vertical-panel/vertical-panel.component';
import { PanelTitleComponent } from './panel-title/panel-title.component';
import { PanelBodyComponent } from './panel-body/panel-body.component';
import { SharedModule } from '@shared/shared.module';
import { QuizComponent } from './tasks/quiz/quiz.component';
import { EditableComponent } from './editable/editable.component';
import { EditModeDirective } from './directives/edit-mode.directive';
import { EditOnEnterDirective } from './directives/edit-on-enter.directive';
import { ViewModeDirective } from './directives/view-mode.directive';

@NgModule({
  declarations: [VerticalPanelComponent, PanelTitleComponent, PanelBodyComponent, QuizComponent, EditableComponent, EditModeDirective, EditOnEnterDirective, ViewModeDirective],
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
