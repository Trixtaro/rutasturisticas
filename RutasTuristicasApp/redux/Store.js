import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers/';

const Store = createStore(
    reducers, //Todos los reducers
    {}, //Estado inicial
    applyMiddleware(reduxThunk)   
);

export default Store;