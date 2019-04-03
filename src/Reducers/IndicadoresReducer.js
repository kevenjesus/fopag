import { IndicadoresConst } from "./ReducersConst";

const initialState = {
  emAndamento: 0,
  aguardandoEfetivacao: 0,
  cancelados: 0,
  efetivados: 0,
  aguardandoEfetivacao: 0,
  isLoading: false,
  error: ""
};

const IndicadoresReducer = (state = [], action) => {
    if (state === []) {
        return initialState;
    }
    switch (action.type) {
      case IndicadoresConst.Indicadores_Loading:
        return {
          ...state,
            emAndamento: 0,
            aguardandoEfetivacao: 0,
            cancelados: 0,
            efetivados: 0,
            aguardandoEfetivacao: 0,
            isLoading: false,
            error: ""
        };
        case IndicadoresConst.Indicadores_Loaded:
        return {
          ...state,
          emAndamento: action.payload.emAndamento,
          aguardandoEfetivacao: action.payload.aguardandoEfetivacao,
          cancelados: action.payload.cancelados,
          efetivados: action.payload.efetivados,
          aguardandoEfetivacao: action.payload.aguardandoEfetivacao,
          isLoading: false,
          error: ""
        };
        case IndicadoresConst.Indicadores_ERROR:
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

export default IndicadoresReducer;
