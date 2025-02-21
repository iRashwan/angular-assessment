import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormElement } from '../../models/form.interface';
import { DynamicFromBuilderService } from '../../services/dynamic-from-builder.service';
import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { FormButtonComponent } from '../form-elements/form-button/form-button.component';
import { FormInputtextComponent } from '../form-elements/form-inputtext/form-inputtext.component';
import { FormTextareaComponent } from '../form-elements/form-textarea/form-textarea.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, FormButtonComponent, FormInputtextComponent, FormTextareaComponent, NgFor],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnChanges {

  formElements: FormElement[] = [];

  @Output() elementSelected = new EventEmitter<FormElement>();
  @Input() selectedElementAfterModify: FormElement | null = null;
  // Global configs that hold the original form structure
  configs: FormElement[] = [
    {
      type: 'textbox',
      name: 'firstTextbox',
      id: 'c4c9f16d-7d1b-47c4-b623-34908be3f94e',
      border: { color: 'black', size: '1px' },
      placeholder: 'Enter text here'
    },
    {
      type: 'textarea',
      name: 'firstTextarea',
      id: 'b3d25b74-b678-4b1f-bff9-bd2fe7bb7b6f',
      border: { color: 'blue', size: '1px' },
      rows: 5,
      cols: 30
    },
    {
      type: 'button',
      name: 'firstButton',
      id: 'ae6fa48e-fc92-4d0b-8c67-d1cf179dfb8a',
      border: { color: 'green', size: 'none' },
      caption: 'Click Me'
    },
    {
      type: 'textarea',
      name: 'secondTextarea',
      id: 'a2871f9e-c79c-4a39-8b5b-909b77bffb33',
      border: { color: 'red', size: '2px' },
      rows: 8,
      cols: 40
    },
    {
      type: 'textarea',
      name: 'thirdTextarea',
      id: '99fa5fd8-c905-4f0c-8e88-d98da578736f',
      border: { color: 'purple', size: '1px' },
      rows: 6,
      cols: 35
    }
  ];

  constructor(private factory: DynamicFromBuilderService) {}

  ngOnInit(): void {
    this.formElements = [...this.configs]; // Assign initial data
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedElementAfterModify'] && this.selectedElementAfterModify) {
      this.updateFormElements(this.selectedElementAfterModify);
    }
  }

  getElement(element: FormElement) {
    this.elementSelected.emit(element);
  }


  updateFormElements(updatedElement: FormElement) {
    const index = this.configs.findIndex(el => el.id === updatedElement.id);
    if (index !== -1) {
      this.configs[index] = { ...updatedElement };
      this.formElements = [...this.configs];
      console.log('Updated formElements:', this.formElements);
    }
  }
}
