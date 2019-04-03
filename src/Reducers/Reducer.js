import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import HomeReducer from "./HomeReducer"
import IndicadoresReducer from "./IndicadoresReducer";

const Reducers = combineReducers({
  LoginReducer: LoginReducer,
  HomeReducer: HomeReducer,
  IndicadoresReducer: IndicadoresReducer
});

export default Reducers;