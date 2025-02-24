import { Routes } from '@angular/router';
import { SampleFormComponent } from './factory-pattern-approch/sample-form/sample-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {path: 'form' , component: SampleFormComponent},
  {path: '**' , component: SampleFormComponent}
];
