import { LoginConst } from "./ReducersConst";

const initialState = {
    username: '',
    password: '',
    tokens: '',
    isLoading: false,
    err: ''

};

const LoginReducer = (state = [], action) => {
  if (state === []) {
    return initialState;
  }
  switch (action.type) {
    case LoginConst.Logging:
      return {
        ...state,
        username: '',
        password: '',
        tokens: '',
        isLoading: true,
      };
    case LoginConst.Logged:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        tokens: action.payload.token,
        isLoading: false,
      };
    case LoginConst.LOGIN_ERROR:
      return {
        ...state,
        username: '',
        password: '',
        tokens: '',
        isLoading: false,
      };
  }
  return state;
};

export default LoginReducer;
