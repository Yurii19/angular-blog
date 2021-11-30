import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesResolver } from '../services/dropdowns.resolver';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ApplicantsResolver } from 'src/services/applicants.resolver';
import { SandboxesComponent } from './features/sandboxes/sandboxes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
   // children: [{ path: 'sandboxes', component: SandboxesComponent }],
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'sandboxes', component: SandboxesComponent }],
  },
  {
    path: 'admin',
    component: AdminComponent,
   // children: [{ path: 'sandboxes', component: SandboxesComponent }],
  },
  {
    path: 'registration',
    component: RegistrationContainerComponent,
    resolve: [PagesResolver, ApplicantsResolver],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
