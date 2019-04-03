import { LoginConst } from "../Reducers/ReducersConst";

export const SetIndicator = (result) => {
  return {
    type: LoginConst.Logged,
    payload: {
      emAndamento: result.emAndamento,
      aguardandoEfetivacao: result.aguardandoEfetivacao,
      cancelados: result.cancelados,
      efetivados: result.efetivados,
      aguardandoEfetivacao: result.aguardandoEfetivacao,
    }
  };
};
