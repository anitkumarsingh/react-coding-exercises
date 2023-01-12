import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from '../Reducers/counter';

const rootReducer = combineReducers({
	count: counterReducer
});
const middleware = [logger];

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
