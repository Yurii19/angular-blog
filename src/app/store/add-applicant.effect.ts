import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { RegistrationService } from 'src/services/registration.service';
import { AddApplicant, GetApplicants, SaveApplicants } from './registration.actions';

@Injectable()
export class ApplicantsEffect {
  constructor(
    private actions$: Actions,
    private registration: RegistrationService
  ) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddApplicant),
      mergeMap(() =>
        this.registration
          .getApplicants()
          .pipe(map((data) => SaveApplicants({ data })))
      )
    )
  );
}
