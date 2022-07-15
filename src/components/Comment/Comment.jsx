import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

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
			<div className='button'>
				<Button variant='contained' onClick={() => history.push('/support')}>
					GO BACK
				</Button>
				<Button variant='contained' onClick={handleNext}>
					NEXT
				</Button>
			</div>
		</>
	);
}

export default Comment;
