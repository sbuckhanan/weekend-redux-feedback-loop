import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const feeling = () => {
	console.log('Feeling');
};

const understanding = () => {
	console.log('Understanding');
};

const support = () => {
	console.log('Support');
};

const comments = () => {
	console.log('Comments');
};

//? create a store using combine reducers
const store = createStore(
	combineReducers({
		feeling,
		understanding,
		support,
		comments,
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
