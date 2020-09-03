import { combineReducers } from "redux";
import joke from ".joke/reducer";

const reducer = combineReducers({
  joke,
  // etc.
});

export default reducer;
