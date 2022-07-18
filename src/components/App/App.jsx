import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import NewReview from '../NewReview/NewReview';
import Admin from '../Admin/Admin';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();
	const getOrders = () => {
		axios
			.get('/feedback')
			.then((response) => {
				dispatch({ type: 'GET_ORDERS', payload: response.data });
			})
			.catch((err) => alert('Error with get', err));
	};

	useEffect(() => getOrders(), []);

	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Feedback!</h1>
					<h4>Don't forget it!</h4>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/admin'>Admin</Link>
						</li>
					</ul>
				</header>
				<Route path='/' exact>
					<Feeling />
				</Route>
				<Route path='/understanding' exact>
					<Understanding />
				</Route>
				<Route path='/support' exact>
					<Support />
				</Route>
				<Route path='/comment' exact>
					<Comment />
				</Route>
				<Route path='/review' getOrders={getOrders} exact>
					<Review />
				</Route>
				<Route path='/new' exact>
					<NewReview />
				</Route>
				<Route path='/admin' exact>
					<Admin getOrders={getOrders} />
				</Route>
			</div>
		</Router>
	);
}

export default App;
