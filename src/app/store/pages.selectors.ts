import { createSelector } from '@ngrx/store';

export const selecRegistration = (state: any) => state.registration;

export const selectOfEducations = createSelector(
  selecRegistration,
  (state: any) => state.educationLevels
);

export const selectOfTechs = createSelector(
  selecRegistration,
  (state: any) => state.techsList
);

export const selectOfApplicants = createSelector(
  selecRegistration,
  (state: any) => state.applicantsList
);
