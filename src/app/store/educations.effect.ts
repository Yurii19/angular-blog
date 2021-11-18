import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { RegistrationService } from 'src/services/registration.service';
import { GetEducationsList, SaveEducationList } from './registration.actions';

@Injectable()
export class EducationsEffect {
  constructor(
    private actions$: Actions,
    private registration: RegistrationService
  ) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetEducationsList),
      mergeMap(() =>
        this.registration.getEducations()
          .pipe(map((data) => SaveEducationList({ data })))
      )
    )
  );
}
