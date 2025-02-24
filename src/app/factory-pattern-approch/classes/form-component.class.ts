// form-component.factory.ts
import { Type } from '@angular/core';
import { FormButtonComponent } from '../form-elements/form-button/form-button.component';
import { FormInputtextComponent } from '../form-elements/form-inputtext/form-inputtext.component';
import { FormTextareaComponent } from '../form-elements/form-textarea/form-textarea.component';


export class FormComponentFactory {
  private static componentMap: { [key: string]: Type<any> } = {
    button: FormButtonComponent,
    textarea: FormTextareaComponent,
    textbox: FormInputtextComponent,
  };

  static getComponent(type: string): Type<any> | null {
    return this.componentMap[type] || null;
  }
}
