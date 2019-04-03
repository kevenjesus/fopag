import { HomeConst } from "./ReducersConst";

const initialState = {
  nome: '',
  cpf: '',
  dataCriacao: '',
  dataAdmissao: '',
  filial: '',
  isLoading: false,
  error: '',
};

const HomeReducer = (state = [], action) => {
  if (state === []) {
    return initialState;
  }
  switch (action.type) {
    case HomeConst.Admissao_Loading:
      return {
        ...state,
        nome: "",
        cpf: "",
        dataCriacao: "",
        dataAdmissao: "",
        filial: "",
        isLoading: true,
        error: ""
      };
    case HomeConst.Admissao_Loaded:
      return {
        ...state,
        nome: action.payload.nome,
        cpf: action.payload.cpf,
        dataCriacao: action.payload.property,
        dataAdmissao: action.payload.dataAdmissao,
        filial: action.payload.filial,
        isLoading: true,
        error: ""
      };
    case HomeConst.HOME_ERROR:
      return {
        ...state,
        nome: "",
        cpf: "",
        dataCriacao: "",
        dataAdmissao: "",
        filial: "",
        isLoading: true,
        error: action.payload.error
      };
  }
  return state;
};

export default HomeReducer;
