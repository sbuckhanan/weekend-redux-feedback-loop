import { useSelector } from 'react-redux';
import AdminItem from '../AdminItem/AdminItem';
import './Admin.css';

function Admin({ getOrders }) {
	const orders = useSelector((state) => state.orders);

	return (
		<table>
			<thead>
				<tr className='headRow'>
					<th>Feeling</th>
					<th>Comprehension</th>
					<th>Support</th>
					<th>Comments</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				{orders.map((order) => (
					<AdminItem order={order} key={order.id} getOrders={getOrders} />
				))}
			</tbody>
		</table>
	);
}

export default Admin;
