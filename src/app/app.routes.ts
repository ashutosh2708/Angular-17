import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'medical-form',
    loadChildren: () =>
      import('./medical-form/medical-form.module').then(
        (m) => m.MedicalFormModule
      ),
  },
];
