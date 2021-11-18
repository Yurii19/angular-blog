import { createAction, props } from '@ngrx/store';

interface Action {
  type: string;
}

export const SaveEducationList = createAction(
  'saveEducationList',
  props<{data : any}>()
);

export const GetEducationsList = createAction(
'getEducationsList'
);

export const SaveTechsList = createAction(
    'saveTechsList',
    props<{data : any}>()
  );

export const GetTechsList = createAction(
  'getTechsList'
);