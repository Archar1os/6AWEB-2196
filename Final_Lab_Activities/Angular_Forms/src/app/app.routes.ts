import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
import { CustomForm } from './custom-form/custom-form';

export const routes: Routes = [
  { path: 'template-demo', component: TemplateDemo },
  { path: '', redirectTo: 'template-demo', pathMatch: 'full' },
  { path: 'reactive-demo', component: ReactiveDemo },
  { path: 'custom-form', component: CustomForm },
];
