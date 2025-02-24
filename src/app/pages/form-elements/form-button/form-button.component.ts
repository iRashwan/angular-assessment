import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonConfig } from './button.interface';

@Component({
  selector: 'app-form-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.scss'
})
export class FormButtonComponent {
  @Input() config!: ButtonConfig;
  @Output() clicked = new EventEmitter<any>();

  handleClick() {
    this.clicked.emit(this.config);
  }

}
