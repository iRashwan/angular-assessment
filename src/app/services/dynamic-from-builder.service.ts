import { Injectable } from '@angular/core';
import { FormElement } from '../models/form.interface';

@Injectable({
  providedIn: 'root'
})
export class DynamicFromBuilderService {
  constructor() {}

  createElement(config: any): FormElement {
    let baseElement: FormElement = {
      type: config.type,
      name: config.name,
      id: config.id,
      border: { color: config.border.color, size: config.border.size }
    };

    switch (config.type) {
      case 'textbox':
        return { ...baseElement, placeholder: config.placeholder || '' };
      case 'textarea':
        return { ...baseElement, rows: config.rows || 0, cols: config.cols || 0 };
      case 'button':
        return { ...baseElement, caption: config.caption || '' };
      default:
        throw new Error(`Unsupported element type: ${config.type}`);
    }
  }

  createElements(configs: any[]): FormElement[] {
    return configs.map(config => this.createElement(config));
  }
}
