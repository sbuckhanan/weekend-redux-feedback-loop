import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';

function App() {
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
					<Support />
				</Route>
				<Route path='/comment'>
					<Comment />
				</Route>
			</div>
		</Router>
	);
}

export default App;
