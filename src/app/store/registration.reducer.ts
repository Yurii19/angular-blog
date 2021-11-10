export const initialState: any = {
  educationLevels: [
    { value: 'secondary', viewValue: 'Secondary education' },
    { value: 'professional', viewValue: 'Professional education' },
    { value: 'higher', viewValue: 'Higher education' },
  ],
};

export function registrationReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case 'getEducationLevels':
      return state;
    default:
      return state;
  }
}
