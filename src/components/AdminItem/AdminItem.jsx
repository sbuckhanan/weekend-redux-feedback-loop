function AdminItem({ order }) {
	return (
		<tr>
			<td>{order.feeling}</td>
			<td>{order.understanding}</td>
			<td>{order.support}</td>
			<td>{order.comments}</td>
			<td>
				<button>DELETE</button>
			</td>
		</tr>
	);
}

export default AdminItem;
