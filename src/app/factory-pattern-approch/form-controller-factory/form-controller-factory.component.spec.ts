import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControllerFactoryComponent } from './form-controller-factory.component';

describe('FormControllerFactoryComponent', () => {
  let component: FormControllerFactoryComponent;
  let fixture: ComponentFixture<FormControllerFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControllerFactoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControllerFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
