import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {
	const [understanding, setUnderstanding] = useState(0);
	const history = useHistory();
	const dispatch = useDispatch();

	const handleNext = () => {
		if (understanding > 0) {
			console.log('Not Empty');
			history.push('/support');
			dispatch({ type: 'ADD_UNDERSTANDING', payload: understanding });
		} else {
			console.log('Its EMPTY');
		}
	};

	return (
		<>
			<h2>How well are you understanding the content?</h2>
			<label>Understanding</label>
			<input
				type='number'
				placeholder='8'
				onChange={(event) => setUnderstanding(event.target.value)}
				value={understanding}
				max='10'
				min='0'
			/>
			<button onClick={handleNext}>NEXT</button>
		</>
	);
}

export default Understanding;
