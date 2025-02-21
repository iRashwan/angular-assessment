import { Component } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { FormBuilderControllerComponent } from '../form-builder-controller/form-builder-controller.component';
import { FormElement } from '../../models/form.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [DynamicFormComponent, FormBuilderControllerComponent, NgIf],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {

  selectedElement: FormElement | null = null;
  selectedElementAfterModify: FormElement | null = null;

  handleElementSelection(element: FormElement) {
    this.selectedElement = element;
  }

  handleElementUpdate(updatedElement: FormElement) {
    this.selectedElementAfterModify = updatedElement;
  }
}
