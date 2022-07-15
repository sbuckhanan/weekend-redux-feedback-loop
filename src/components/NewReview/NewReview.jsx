import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import './NewReview.css';

function NewReview() {
	const history = useHistory();

	const handleNew = () => {
		history.push('/');
	};

	return (
		<>
			<h1>Thanks for the feedback</h1>
			<div className='button'>
				<Button variant='contained' onClick={handleNew}>
					SUBMIT NEW FEEDBACK
				</Button>
			</div>
			{/* <button onClick={handleNew}>SUBMIT NEW FEEDBACK</button> */}
		</>
	);
}

export default NewReview;
