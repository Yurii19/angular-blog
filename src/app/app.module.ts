import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { fakeBackendProvider } from 'src/services/request.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './pages/registration/registration.component';
import { StoreModule } from '@ngrx/store';
import { registrationReducer } from './store/registration.reducer';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RegistrationEffect } from './store/registration.effect';
import { SandboxesComponent } from './features/sandboxes/sandboxes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    RegistrationComponent,
    RegistrationContainerComponent,
    SandboxesComponent,
  ],
  imports: [
    StoreModule.forRoot({
      registration: registrationReducer,
    }),
    StoreDevtoolsModule.instrument({
      name: 'Blog',
      // logOnly: environment.production
    }),
    EffectsModule.forRoot([RegistrationEffect]),
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreDevtoolsModule,
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
