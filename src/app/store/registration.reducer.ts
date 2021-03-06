export const initialState: any = {
  educationLevels: [],
  techsList: [],
  loadingStatus: false,
  applicantsList: [],
};

export function registrationReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case 'addApplicant':
      return { ...state, loadingStatus: true };
    case 'saveApplicants':
      return { ...state, applicantsList: action.data, loadingStatus: false };
    case 'requestApplicants':
      return { ...state, loadingStatus: true };
    case 'saveEducationList':
      return { ...state, educationLevels: action.data, loadingStatus: false };
    case 'getEducationList':
      return { ...state, loadingStatus: true };
    case 'saveTechsList':
      return { ...state, techsList: action.data, loadingStatus: false };
    case 'getTechsList':
      return { ...state, loadingStatus: true };
    default:
      return state;
  }
}
