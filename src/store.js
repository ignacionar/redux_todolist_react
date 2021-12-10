import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

// REDUCERS
import { todoReducer } from "./reducers/todoReducer";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['todosList'],
}

const Reducer = combineReducers({ todosList: todoReducer });

const rootReducer = persistReducer( persistConfig, Reducer)

const middleware = [];

export const store = createStore(
    rootReducer, 
    {}, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store)
