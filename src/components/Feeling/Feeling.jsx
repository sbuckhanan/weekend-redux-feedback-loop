import { useState } from 'react';

function Feeling() {
	const [feeling, setFeeling] = useState(0);

	const handleNext = () => {
		if (feeling > 0) {
			console.log('Not Empty');
		} else {
			console.log('Its EMPTY');
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
