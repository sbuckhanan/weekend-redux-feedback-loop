import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review() {
	const history = useHistory();
	const feeling = useSelector((state) => state.feeling);
	const understanding = useSelector((state) => state.understanding);
	const support = useSelector((state) => state.support);
	const comments = useSelector((state) => state.comments);

	const handleSubmit = () => {
		axios
			.post('/feedback', { feeling, understanding, support, comments })
			.then(() => {
				console.log('POSTED');
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
			<button onClick={handleSubmit}>SUBMIT</button>
		</>
	);
}

export default Review;
