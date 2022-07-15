import { useState } from 'react';

function Understanding() {
	const [understanding, setUnderstanding] = useState(0);

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
			/>
		</>
	);
}

export default Understanding;
