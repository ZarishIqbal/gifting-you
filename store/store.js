import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { loadState, saveState } from "../src/utils/localstorage";
import { debounce } from "../src/utils";
import { rootReducer } from "./configure-store";

const initialState = loadState();

let middleware = [thunkMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

store.subscribe(
  debounce(() => {
    const state = store.getState();
    saveState(state);
  }, 0)
);

export { store };
