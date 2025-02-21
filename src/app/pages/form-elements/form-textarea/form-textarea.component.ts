import { Component, Input } from '@angular/core';
import { TextareaConfig } from './textarea.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-form-textarea',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './form-textarea.component.html',
  styleUrl: './form-textarea.component.scss'
})
export class FormTextareaComponent {
  @Input() textareaConfig!: TextareaConfig;

}
