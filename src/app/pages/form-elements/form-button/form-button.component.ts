import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonConfig } from './button.interface';

@Component({
  selector: 'app-form-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.scss'
})
export class FormButtonComponent {
  @Input() buttonConfig!: ButtonConfig;

}
