import { HomeConst } from "../Reducers/ReducersConst";

export const GetInfo = (email, senha, token) => {
  return {
    type: HomeConst.Admissao_Loaded,
    payload: {
      email: email,
      senha: senha,
      token: token
    }
  };
};

// export function loginRequest(user, pass) {
//     return dispatch =>
//         new Promise((resolve, reject) => {
//             dispatch({
//                 type: LoginConst.LOGIN_LOADING,
//                 payload: { isLoading: true }
//             });
//             request
//                 .getInstance(request.TYPE_AUTH)
//                 .post("/api/Security/AuthenticateMobile", {
//                     name: user,
//                     password: pass,
//                     secret: request.SECRET_KEY
//                 })
//                 .then(response => {
//                     token = response.data.token;
//                     dispatch(login(user, pass, token));
//                     resolve();
//                 })
//                 .catch(err => {
//                     dispatch({ type: LoginConst.LOGIN_ERROR, payload: { error: err } });
//                     reject(err);
//                 });
//         });
// }
