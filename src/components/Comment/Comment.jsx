import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comment() {
	//? hold value of the input field
	const [comment, setComment] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();

	const handleNext = () => {
		if (comment !== '') {
			console.log('Ayyo');
			history.push('/review');
			dispatch({ type: 'ADD_COMMENT', payload: comment });
		} else {
			history.push('/review');
		}
	};

	return (
		<>
			<h2>Any comments you want to leave?</h2>
			<label className='label'>Comment</label>
			<input
				className='input'
				type='text'
				placeholder='This was great'
				onChange={(event) => setComment(event.target.value)}
				value={comment}
			/>
			<button onClick={handleNext}>NEXT</button>
			<button onClick={() => history.push('/support')}>Go Back</button>
		</>
	);
}

export default Comment;
