import axios from 'axios';

function AdminItem({ order, getOrders }) {
	const handleDelete = () => {
		axios
			.delete(`/feedback/${order.id}`)
			.then((response) => {
				console.log(response);
				//? get again
				getOrders();
			})
			.catch((err) => console.log('Error in delete', err));
	};
	return (
		<tr>
			<td>{order.feeling}</td>
			<td>{order.understanding}</td>
			<td>{order.support}</td>
			<td>{order.comments === '' ? 'No Comments' : order.comments}</td>
			<td>
				<button onClick={handleDelete}>DELETE</button>
			</td>
		</tr>
	);
}

export default AdminItem;
