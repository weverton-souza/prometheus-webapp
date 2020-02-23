import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalPanelComponent } from './vertical-panel/vertical-panel.component';

@NgModule({
  declarations: [VerticalPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [
    VerticalPanelComponent
  ]
})
export class SharedComponentsModule { }
