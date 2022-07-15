import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

function Understanding() {
	const [understanding, setUnderstanding] = useState(0);
	const history = useHistory();
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [position, setPosition] = useState({
		vertical: 'top',
		horizontal: 'center',
	});

	const { vertical, horizontal } = position;

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		setOpen(false);
	};

	const handleNext = () => {
		if (understanding > 0) {
			console.log('Not Empty');
			history.push('/support');
			dispatch({ type: 'ADD_UNDERSTANDING', payload: understanding });
		} else {
			handleClick();
		}
	};

	return (
		<>
			<Snackbar open={open} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
				<Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
					Number must be between 1-10
				</Alert>
			</Snackbar>
			<h2>How well are you understanding the content?</h2>
			<label className='label'>Understanding</label>
			<input
				className='input'
				type='number'
				placeholder='8'
				onChange={(event) => setUnderstanding(event.target.value)}
				value={understanding}
				max='10'
				min='0'
			/>
			<div className='button'>
				<Button variant='contained' onClick={() => history.push('/')}>
					GO BACK
				</Button>
				<Button variant='contained' onClick={handleNext}>
					NEXT
				</Button>
			</div>
		</>
	);
}

export default Understanding;
