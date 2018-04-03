import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';

export default function configureStore() {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
