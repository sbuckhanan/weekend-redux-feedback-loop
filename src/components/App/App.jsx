import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';

function App() {
	const [support, setSupport] = useState(0);
	const [comment, setComment] = useState('');

	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Feedback!</h1>
					<h4>Don't forget it!</h4>
				</header>
				<Route path='/' exact>
					<Feeling />
				</Route>
				<Route path='/understanding'>
					<Understanding />
				</Route>
				<Route path='/support'>
					<h2>How well are you being supported?</h2>
					<label>Support</label>
					<input
						type='number'
						placeholder='10'
						onChange={(event) => setSupport(event.target.value)}
						value={support}
						max='10'
					/>
				</Route>
				<Route path='/comment'>
					<h2>Any comments you want to leave?</h2>
					<label>Comment</label>
					<input
						type='text'
						placeholder='This was great'
						onChange={(event) => setComment(event.target.value)}
						value={comment}
					/>
				</Route>
			</div>
		</Router>
	);
}

export default App;
