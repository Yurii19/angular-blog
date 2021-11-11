import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { RegistrationService } from 'src/services/registration.service';

@Injectable({ providedIn: 'root' })
export class PagesResolver implements Resolve<any> {
  constructor(
      private registration : RegistrationService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.registration.getTechs();
  }
}
