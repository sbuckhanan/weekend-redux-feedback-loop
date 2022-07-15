import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const feeling = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_FEELING':
			return action.payload;
		default:
			return state;
	}
};

const understanding = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_UNDERSTANDING':
			return action.payload;
		default:
			return state;
	}
};

const support = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_SUPPORT':
			return action.payload;
		default:
			return state;
	}
};

const comments = (state = '', action) => {
	switch (action.type) {
		case 'ADD_COMMENT':
			return action.payload;
		default:
			return state;
	}
};

//? create a store using combine reducers
const store = createStore(
	combineReducers({
		feeling,
		understanding,
		support,
		comments,
	}),
	applyMiddleware(logger)
);

//? add provider
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
