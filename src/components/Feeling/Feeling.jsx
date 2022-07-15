import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {
	const [feeling, setFeeling] = useState(0);
	const history = useHistory();
	const dispatch = useDispatch();

	const handleNext = () => {
		if (feeling > 0) {
			history.push('/understanding');
			console.log('Not Empty');
			dispatch({ type: 'ADD_FEELING', payload: feeling });
		} else {
			alert('Number must be between 1-10');
		}
	};

	return (
		<>
			<h2>How Are You Feeling Today?</h2>
			<label>Feeling</label>
			<input
				type='number'
				placeholder='3'
				onChange={(event) => setFeeling(event.target.value)}
				value={feeling}
				max='10'
				min='0'
			/>
			<button onClick={handleNext}>NEXT</button>
		</>
	);
}

export default Feeling;
