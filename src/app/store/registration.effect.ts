import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { RegistrationService } from 'src/services/registration.service';
import { GetTechsList, SaveTechsList } from './registration.actions';

@Injectable()
export class NotificationsEffects {
  constructor(
    private actions$: Actions,
    private registration: RegistrationService
  ) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetTechsList),
      mergeMap(() =>
        this.registration
          .getTechs()
          .pipe(map((data) =>  SaveTechsList({ data })))
      )
    )
  );
}
