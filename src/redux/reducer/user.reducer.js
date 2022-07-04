import * as ActionType from '../ActionType';

const initValue = {
  isLoaded: false,
  user: null,
  error: '',
  authMsg: '',
  confirm: null,
};

export const authSignUpReducer = (state = initValue, action) => {
  switch (action.type) {
    case ActionType.EMAIL_USER:
      return {
        ...state,
        isLoaded: false,
        error: '',
        user: null,
        authMsg: action.payload,
        confirm: null,
      };
    case ActionType.PHONE_USER:
      return {
        ...state,
        isLoaded: false,
        error: '',
        user: null,
        authMsg: action.payload,
        confirm: null,
      };
    case ActionType.SIGNIN_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        error: '',
        user: action.payload,
        authMsg: '',
        confirm: null,
      };
    case ActionType.SIGNOUT_USER:
      return {
        ...state,
        isLoaded: false,
        error: '',
        user: null,
        authMsg: alert(action.payload),
        confirm: null,
      };
    case ActionType.RESET_PASSWORD:
      return {
        ...state,
        isLoaded: false,
        error: '',
        user: null,
        authMsg: alert(action.payload),
        confirm: null,
      };
    case ActionType.OTP:
      return {
        ...state,
        isLoaded: false,
        error: '',
        user: null,
        authMsg: '',
        confirm: action.payload,
      };
    case ActionType.AUTH_ERROR:
      return {
        ...state,
        isLoaded: false,
        user: null,
        error: alert(action.payload),
        authMsg: '',
        confirm: null,
      };
    default:
      return state;
  }
};
