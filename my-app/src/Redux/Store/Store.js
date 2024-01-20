import {applyMiddleware, legacy_createStore} from "redux"
import { MovieReducer } from "../Reducer/MovieReducer";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

// 1-Create Store 

export const MyStore = legacy_createStore(MovieReducer,applyMiddleware(thunk));


