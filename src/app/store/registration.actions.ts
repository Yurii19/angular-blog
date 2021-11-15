import { createAction, props } from '@ngrx/store';

interface Action {
  type: string;
}

export const SaveTechsList = createAction(
    'saveTechsList',
    props<{data : any}>()
  );

export const GetTechsList = createAction(
  'getTechsList'
);