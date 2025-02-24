// form-component.factory.ts
import { Type } from '@angular/core';
import { FormButtonComponent } from '../../pages/form-elements/form-button/form-button.component';
import { FormTextareaComponent } from '../../pages/form-elements/form-textarea/form-textarea.component';
import { FormInputtextComponent } from '../../pages/form-elements/form-inputtext/form-inputtext.component';


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
