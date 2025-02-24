import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFactoryFormComponent } from './dynamic-factory-form.component';

describe('DynamicFactoryFormComponent', () => {
  let component: DynamicFactoryFormComponent;
  let fixture: ComponentFixture<DynamicFactoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFactoryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFactoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
