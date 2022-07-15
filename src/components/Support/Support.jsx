import { useState } from 'react';

function Support() {
	const [support, setSupport] = useState(0);

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
			/>
		</>
	);
}

export default Support;
