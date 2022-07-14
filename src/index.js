import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

//? create a store using combine reducers
const store = createStore(
	combineReducers({
		thing1,
		thing2,
		thing3,
		thing4,
	})
);

//? add provider
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
