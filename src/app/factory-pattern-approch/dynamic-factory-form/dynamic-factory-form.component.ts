import { Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef, OnChanges, SimpleChanges } from '@angular/core';
import { FormComponentFactory } from '../classes/form-component.class';

@Component({
  selector: 'app-dynamic-factory-form',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-factory-form.component.html',
  styleUrl: './dynamic-factory-form.component.scss'
})
export class DynamicFactoryFormComponent implements OnChanges {
  @Input() formConfig!: any[];
  @ViewChild('formContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  @Output() elementClicked = new EventEmitter<any>();
  private componentRefs: any[] = [];

  ngOnInit(): void {
    this.loadComponents();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Previous formConfig:", changes['formConfig']?.previousValue);
    console.log("New formConfig:", changes['formConfig']?.currentValue);

    if (changes['formConfig'] && !changes['formConfig'].firstChange) {
      console.log("formConfig changed:", this.formConfig);
      this.updateComponents();
    }
  }


  private loadComponents(): void {
    this.container.clear();
    this.componentRefs = [];

    this.formConfig.forEach((fieldConfig, index) => {
      const componentType = FormComponentFactory.getComponent(fieldConfig.type);

      if (componentType) {
        const componentRef = this.container.createComponent(componentType);
        (componentRef.instance as any).config = fieldConfig;
        (componentRef.instance as any).clicked?.subscribe((event: any) => {
          this.handleElementClick(event);
        });

        this.componentRefs[index] = componentRef;
      }
    });
  }

  updateComponents(): void {
    this.formConfig.forEach((updatedConfig, index) => {
      if (this.componentRefs[index]) {
        console.log("Updating Component:", updatedConfig);
        this.componentRefs[index].setInput('config', updatedConfig);
      }
    });
  }

  handleElementClick(event: any) {
    console.log('Clicked Element:', event);
    this.elementClicked.emit(event);
  }
}
