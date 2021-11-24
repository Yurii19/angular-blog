import { Injectable } from '@angular/core';
import { RequestApplicants } from 'src/app/store/registration.actions';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { selectOfApplicants } from '../app/store/registration.selectors';
import { filter, map, take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApplicantsResolver implements Resolve<any> {
  constructor(private store: Store) {}
  // this.store.dispatch(RequestApplicants())
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const result$ = this.store.select(selectOfApplicants).pipe(
      tap((data) => {
        this.store.dispatch(RequestApplicants());
      }),
      filter(data => data.length),
      take(1)
    );
    return result$;
  }
}
