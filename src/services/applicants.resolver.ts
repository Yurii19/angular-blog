import { Injectable } from '@angular/core';
import { RequestApplicants } from 'src/app/store/registration.actions';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { selectOfApplicants } from '../app/store/registration.selectors';
import { take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApplicantsResolver implements Resolve<any> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const result$ = this.store.select(selectOfApplicants).pipe(
      tap((resp) => {
        if (resp.length > 0) {
          this.store.dispatch(RequestApplicants());
        }
      }),
      take(1)
    );
    return result$;
  }
}
