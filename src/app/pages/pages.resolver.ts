import { Injectable } from '@angular/core';
import { GetTechsList } from 'src/app/store/registration.actions';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { RegistrationService } from 'src/services/registration.service';

@Injectable({ providedIn: 'root' })
export class PagesResolver implements Resolve<any> {
  constructor(
    private registration: RegistrationService,
    private store: Store
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(GetTechsList());
    return this.registration.getTechs();
  }
}
