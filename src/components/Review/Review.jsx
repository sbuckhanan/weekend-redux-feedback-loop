import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Review() {
	const history = useHistory();

	const handleSubmit = () => {
		axios
			.post('/feedback')
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
				<li>FEELINGS</li>
				<li>UNDERSTANDING</li>
				<li>SUPPORT</li>
				<li>COMMENTS</li>
			</ul>
			<button onClick={handleSubmit}>SUBMIT</button>
		</>
	);
}

export default Review;
