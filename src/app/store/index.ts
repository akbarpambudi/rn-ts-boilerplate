import {createStore, Reducer,applyMiddleware, Middleware, Store} from 'redux';
import thunk from 'redux-thunk';
export default function createAppStore(reducer:Reducer,middleWare:Middleware):Store{

    return createStore(reducer,applyMiddleware(middleWare,thunk));

}