import { useState } from 'react';

function Support() {
	const [support, setSupport] = useState(0);

	const handleNext = () => {
		if (support > 0) {
			console.log('Not Empty');
		} else {
			console.log('Its EMPTY');
		}
	};

	return (
		<>
			<h2>How well are you being supported?</h2>
			<label>Support</label>
			<input
				type='number'
				placeholder='10'
				onChange={(event) => setSupport(event.target.value)}
				value={support}
				max='10'
				min='0'
			/>
			<button onClick={handleNext}>NEXT</button>
		</>
	);
}

export default Support;
