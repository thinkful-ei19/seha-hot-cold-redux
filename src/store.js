import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { gameReducer } from './reducers/';

export default createStore(
    gameReducer,
    composeWithDevTools()
);

