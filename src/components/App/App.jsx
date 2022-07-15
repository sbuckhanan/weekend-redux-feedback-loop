import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
	const [feeling, setFeeling] = useState(0);
	const [understanding, setUnderstanding] = useState(0);
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
					<h2>How Are You Feeling Today?</h2>
					<label>Feeling</label>
					<input
						type='number'
						placeholder='3'
						onChange={(event) => setFeeling(event.target.value)}
						value={feeling}
						max='10'
					/>
				</Route>
				<Route path='/understanding'>
					<h2>How well are you understanding the content?</h2>
					<label>Understanding</label>
					<input
						type='number'
						placeholder='8'
						onChange={(event) => setUnderstanding(event.target.value)}
						value={understanding}
						max='10'
					/>
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
