import { useHistory } from 'react-router-dom';

function NewReview() {
	const history = useHistory();

	const handleNew = () => {
		history.push('/');
	};

	return (
		<>
			<h1>Thanks for the feedback</h1>
			<button onClick={handleNew}>SUBMIT NEW FEEDBACK</button>
		</>
	);
}

export default NewReview;
