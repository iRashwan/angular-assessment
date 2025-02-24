import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextboxConfig } from './inputtext.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-form-inputtext',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './form-inputtext.component.html',
  styleUrl: './form-inputtext.component.scss'
})
export class FormInputtextComponent {
  @Input() config!: TextboxConfig;
  @Output() clicked = new EventEmitter<any>();

  handleClick() {
    this.clicked.emit(this.config);
  }
}
