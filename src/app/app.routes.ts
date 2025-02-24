import { Routes } from '@angular/router';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { SampleFormComponent } from './factory-pattern-approch/sample-form/sample-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'f2',
    pathMatch: 'full'
  },
  { path: 'form', component: FormBuilderComponent },
  {path: 'f2' , component: SampleFormComponent}
];
