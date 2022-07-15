import { useHistory } from 'react-router-dom';

function NewReview() {
	const history = useHistory();

	return (
		<>
			<h1>Thanks for the feedback</h1>
			<button>SUBMIT NEW FEEDBACK</button>
		</>
	);
}

export default NewReview;
