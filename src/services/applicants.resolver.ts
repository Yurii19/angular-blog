import { Injectable } from '@angular/core';
import {
  GetEducationsList,
  GetTechsList,
  RequestApplicants,
} from 'src/app/store/registration.actions';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { RegistrationService } from 'src/services/registration.service';
import { selectOfEducations, selectOfTechs } from '../app/store/pages.selectors';
import { filter, take, tap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApplicantsResolver implements Resolve<any> {
  constructor(
    private store: Store
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const techs$ = this.store.select(selectOfTechs);
    // const educations$ = this.store.select(selectOfEducations);
    // const responce$ = merge(techs$, educations$).pipe(
    //   tap((resp) => {
        const responce$ =  this.store.dispatch(RequestApplicants())
    //     if (!resp.length) {
    //       this.store.dispatch(GetTechsList());
    //       this.store.dispatch(GetEducationsList());
    //     }
    //   }),
    //   filter((data) => data.length),
    //   take(1)
    // );
    return responce$;
  }
}
