import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

function Feeling() {
	const [feeling, setFeeling] = useState(0);
	const history = useHistory();
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [position, setPosition] = useState({
		vertical: 'top',
		horizontal: 'center',
	});

	const { vertical, horizontal } = position;

	const handleNext = () => {
		if (feeling > 0) {
			history.push('/understanding');
			console.log('Not Empty');
			dispatch({ type: 'ADD_FEELING', payload: feeling });
		} else {
			// alert('Number must be between 1-10');
			handleClick();
		}
	};

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		setOpen(false);
	};

	return (
		<>
			<Snackbar open={open} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
				<Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
					Number must be between 1-10
				</Alert>
			</Snackbar>
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
