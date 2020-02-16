import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reduxThunk from 'redux-thunk';

import reducers from './reducers/';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const Store = createStore(
    persistedReducer, //Todos l
    {},
    applyMiddleware(reduxThunk)   
);

const Persistor = persistStore(Store)

export {Store, Persistor};