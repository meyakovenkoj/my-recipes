import { combineReducers } from "redux";
import recipes from "./reducers/recipes";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    recipes,
  });

export default createRootReducer;
