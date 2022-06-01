import { applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux';
import { composeWhitDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "../reducer";

export const store = createStore(rootReducer, composeWhitDevTools(applyMiddleware(thunk)))