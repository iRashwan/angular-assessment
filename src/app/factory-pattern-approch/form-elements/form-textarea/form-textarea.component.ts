import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() config!: TextareaConfig;
  @Output() clicked = new EventEmitter<any>();

  handleClick() {
    this.clicked.emit(this.config);
  }
}
