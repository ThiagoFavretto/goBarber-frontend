import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";

import persistReducer from "./persistReducers";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const enhacer = applyMiddleware(...middlewares);

const store = createStore(persistReducer(rootReducer), enhacer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
