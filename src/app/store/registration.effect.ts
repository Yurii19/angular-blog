import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { RegistrationService } from 'src/services/registration.service';
import {
  AddApplicant,
  GetEducationsList,
  GetTechsList,
  RequestApplicants,
  SaveApplicants,
  SaveEducationList,
  SaveTechsList,
} from './registration.actions';

@Injectable()
export class RegistrationEffect {
  constructor(
    private actions$: Actions,
    private registration: RegistrationService
  ) {}

  applicants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RequestApplicants),
      mergeMap(() =>
        this.registration
          .getApplicants()
          .pipe(map((data) => SaveApplicants({ data })))
      )
    )
  );

  addApplicant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddApplicant),
      mergeMap(({ type, data }) =>
        this.registration
          .saveApplicant(data)
          .pipe(map((data) => SaveApplicants({ data })))
      )
    )
  );

  educationLevels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetEducationsList),
      mergeMap(() =>
        this.registration
          .getEducations()
          .pipe(map((data) => SaveEducationList({ data })))
      )
    )
  );

  techsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetTechsList),
      mergeMap(() =>
        this.registration
          .getTechs()
          .pipe(map((data) => SaveTechsList({ data })))
      )
    )
  );
}
