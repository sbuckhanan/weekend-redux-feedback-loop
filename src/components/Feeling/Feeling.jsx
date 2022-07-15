import { useState } from 'react';

function Feeling() {
	const [feeling, setFeeling] = useState(0);

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
			/>
		</>
	);
}

export default Feeling;
