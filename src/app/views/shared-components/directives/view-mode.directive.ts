import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[caltechViewMode]'
})
export class ViewModeDirective {
  constructor(public tpl: TemplateRef<any>) { }
}
