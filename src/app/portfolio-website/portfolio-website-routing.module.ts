import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InterfaceComponent } from './interface/interface.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'interface', component: InterfaceComponent },
  { path: 'error-handling', component: ErrorHandlingComponent },
  { path: 'crud', component: CrudComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioWebsiteRoutingModule {}
