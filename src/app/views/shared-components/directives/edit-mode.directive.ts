import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[caltechEditMode]'
})
export class EditModeDirective {
  constructor(public tpl: TemplateRef<any>) { }
}
