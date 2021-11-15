export const initialState: any = {
  educationLevels: [
    { value: 'secondary', viewValue: 'Secondary education' },
    { value: 'professional', viewValue: 'Professional education' },
    { value: 'higher', viewValue: 'Higher education' },
  ],
  techsList: [
    {
      value: 'value',
      viewValue: 'There are no any',
    },
  ],
};

export function registrationReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case 'saveTechsList':
      return { ...state, techsList: action.data };
    case 'getTechsList':
      return state;
    default:
      return state;
  }
}
