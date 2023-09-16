import { auth } from '../../hoc/auth';

export const Dashboard = () => {
	return <h1>User is authorized to see the dashboard</h1>;
};

export default auth(Dashboard);
