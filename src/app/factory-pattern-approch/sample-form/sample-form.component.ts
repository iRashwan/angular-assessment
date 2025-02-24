import { Component } from '@angular/core';
import { DynamicFactoryFormComponent } from '../dynamic-factory-form/dynamic-factory-form.component';
import { FormControllerFactoryComponent } from '../form-controller-factory/form-controller-factory.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sample-form',//
  standalone: true,
  imports: [DynamicFactoryFormComponent, FormControllerFactoryComponent, NgIf],
  templateUrl: './sample-form.component.html',
  styleUrl: './sample-form.component.scss'
})
export class SampleFormComponent {
  formConfig = [
    {
      "type": "textbox",
      "name": "firstTextbox",
      "id": "c4c9f16d-7d1b-47c4-b623-34908be3f94e",
      "border": {
        "color": "black",
        "size": "1px"
      },
      "placeholder": "Enter text here"
    },
    {
      "type": "textarea",
      "name": "firstTextarea",
      "id": "b3d25b74-b678-4b1f-bff9-bd2fe7bb7b6f",
      "border": {
        "color": "blue",
        "size": "1px"
      },
      "rows": 5,
      "cols": 30
    },
    {
      "type": "button",
      "name": "firstButton",
      "id": "ae6fa48e-fc92-4d0b-8c67-d1cf179dfb8a",
      "border": {
        "color": "green",
        "size": "none"
      },
      "caption": "Click Me"
    },
    {
      "type": "textarea",
      "name": "secondTextarea",
      "id": "a2871f9e-c79c-4a39-8b5b-909b77bffb33",
      "border": {
        "color": "red",
        "size": "2px"
      },
      "rows": 8,
      "cols": 40
    },
    {
      "type": "textarea",
      "name": "thirdTextarea",
      "id": "99fa5fd8-c905-4f0c-8e88-d98da578736f",
      "border": {
        "color": "purple",
        "size": "1px"
      },
      "rows": 6,
      "cols": 35
    }
  ];

  clickedElement: any = null;


  handleElementClick(event: any) {
    this.clickedElement = { ...event }; 
  }

  handleElementUpdate(updatedValues: any) {
    // console.log("sample", updatedValues);
      Object.assign(this.clickedElement, updatedValues);
    this.formConfig = this.formConfig.map(item =>
      item.id === updatedValues.id ? { ...updatedValues } : item
    );
  }

}

