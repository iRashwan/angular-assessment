import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormElement } from '../../models/form.interface';
import { NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-form-builder-controller',
  standalone: true,
  imports: [ReactiveFormsModule , NgIf , TitleCasePipe],
  templateUrl: './form-builder-controller.component.html',
  styleUrl: './form-builder-controller.component.scss'
})
export class FormBuilderControllerComponent {

  dynamicForm!: FormGroup;

  @Input() selectedElement!: FormElement | null;
  @Output() updatedElement = new EventEmitter<FormElement>();

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedElement'] && this.selectedElement) {
      this.createForm(this.selectedElement);
    }
  }

  createForm(element: FormElement): void {
    if (!element) return;

    let formData: any = {
      id: [{ value: element.id, disabled: true }],
      type: [{ value: element.type, disabled: true }],
      name: [element.name, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      borderColor: [element.border.color],
      borderSize: [element.border.size]
    };

    if ('caption' in element) {
      formData.caption = [element.caption, [Validators.required]];
    }
    if ('placeholder' in element) {
      formData.placeholder = [element.placeholder, [Validators.required]];
    }
    if ('rows' in element) {
      formData.rows = [element.rows, [Validators.required]];
    }
    if ('cols' in element) {
      formData.cols = [element.cols, [Validators.required]];
    }

    this.dynamicForm = this.fb.group(formData);

    this.dynamicForm.valueChanges.subscribe(value => {
      const updatedElement: FormElement = {
        ...element,
        ...value,
        border: { color: value.borderColor, size: value.borderSize }
      };

      this.updatedElement.emit(updatedElement);
    });
  }

  getControl(controlName: string) {
    return this.dynamicForm.get(controlName);
  }
}
