import { useState } from 'react';

function Comment() {
	const [comment, setComment] = useState('');

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
		</>
	);
}

export default Comment;
