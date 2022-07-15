import { useHistory } from 'react-router-dom';

function Review() {
	const history = useHistory();

	const handleSubmit = () => {
		console.log('POST HERE TOO ');
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
