import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesResolver } from '../services/dropdowns.resolver';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ApplicantsResolver } from 'src/services/applicants.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'registration',
    component: RegistrationContainerComponent,
    resolve: [PagesResolver, ApplicantsResolver]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
