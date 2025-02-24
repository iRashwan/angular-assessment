import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-controller-factory',//
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './form-controller-factory.component.html',
  styleUrl: './form-controller-factory.component.scss'
})
export class FormControllerFactoryComponent implements OnInit, OnChanges {
  @Input() elementData: any = null;
  @Output() updatedElement = new EventEmitter<any>();

  form!: FormGroup;
  objectKeys: string[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['elementData'] && changes['elementData'].currentValue) {
      this.createForm(); 
    }
  }

  private createForm(): void {
    if (!this.elementData) return;
  
    this.objectKeys = Object.keys(this.elementData);
    const controls: any = {};
  
    this.objectKeys.forEach((key) => {
      if (key === 'border' && typeof this.elementData[key] === 'object') {
        controls['borderColor'] = this.fb.control(this.elementData[key].color);
        controls['borderSize'] = this.fb.control(this.elementData[key].size);
      } else if (key === 'type' || key === 'id') {
        controls[key] = this.fb.control({ value: this.elementData[key], disabled: true });
      } else if (key === 'name') {
        controls[key] = this.fb.control(
          { value: this.elementData[key], disabled: false },
          [Validators.minLength(5), Validators.maxLength(10)]
        );
      } else {
        controls[key] = this.fb.control(this.elementData[key]);
      }
    });
  
    this.form = this.fb.group(controls);
  
    // **Mark all fields as touched immediately after form creation**
    Object.keys(this.form.controls).forEach((controlName) => {
      this.form.controls[controlName].markAsTouched(); 
    });
  
    // Subscribe to form changes and properly reconstruct the object
    this.form.valueChanges.subscribe((updatedValues) => {
      const updatedElement = { ...this.elementData, ...updatedValues };
  
      updatedElement.border = {
        color: updatedValues.borderColor,
        size: updatedValues.borderSize,
      };
  
      delete updatedElement.borderColor;
      delete updatedElement.borderSize;
      this.updatedElement.emit(updatedElement);
    });
  }

}