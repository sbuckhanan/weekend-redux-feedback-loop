import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Review() {
	const history = useHistory();
	const feeling = useSelector((state) => state.feeling);
	const understanding = useSelector((state) => state.understanding);
	const support = useSelector((state) => state.support);
	const comments = useSelector((state) => state.comments);

	const handleSubmit = ({ getOrders }) => {
		axios
			.post('/feedback', { feeling, understanding, support, comments })
			.then(() => {
				console.log('POSTED');
				getOrders();
			})
			.catch((err) => {
				alert('Error posting', err);
			});
		history.push('/new');
	};

	return (
		<>
			<h1>REVIEW YOUR FEEDBACK</h1>
			<ul>
				<li>Feeling: {feeling}</li>
				<li>Understanding: {understanding}</li>
				<li>Support: {support}</li>
				<li>Comments: {comments}</li>
			</ul>
			<div className='button'>
				<Button variant='contained' onClick={() => history.push('/comment')}>
					GO BACK
				</Button>
				<Button variant='contained' onClick={handleSubmit}>
					SUBMIT
				</Button>
			</div>
			{/* <button onClick={handleSubmit}>SUBMIT</button>
			<button onClick={() => history.push('/comment')}>Go Back</button> */}
		</>
	);
}

export default Review;
