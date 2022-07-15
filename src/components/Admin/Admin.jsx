import { useSelector } from 'react-redux';

function Admin() {
	const orders = useSelector((state) => state.orders);

	return (
		<table>
			<thead>
				<tr>
					<th>Feeling</th>
					<th>Comprehension</th>
					<th>Support</th>
					<th>Comments</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	);
}

export default Admin;
