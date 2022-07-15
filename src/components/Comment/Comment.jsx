import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Comment() {
	//? hold value of the input field
	const [comment, setComment] = useState('');
	const history = useHistory();

	const handleNext = () => {
		console.log('Ayyo');
		history.push('/review');
	};

	return (
		<>
			<h2>Any comments you want to leave?</h2>
			<label>Comment</label>
			<input
				type='text'
				placeholder='This was great'
				onChange={(event) => setComment(event.target.value)}
				value={comment}
			/>
			<button onClick={handleNext}>NEXT</button>
		</>
	);
}

export default Comment;
