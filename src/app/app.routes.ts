import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'portfolio',
  //   loadChildren: () =>
  //     import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
  // },
  {
    path: 'medical-form',
    loadChildren: () =>
      import('./medical-form/medical-form.module').then(
        (m) => m.MedicalFormModule
      ),
  },
  {
    path: 'portfolio-website',
    loadChildren: () =>
      import('./portfolio-website/portfolio-website.module').then(
        (m) => m.PortfolioWebsiteModule
      ),
  },
];
