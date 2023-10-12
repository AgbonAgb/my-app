import { lazy, Suspense } from 'react';
import CircularLoader from "../../custom/circularLoader/circularLoader";
import Dashboard from '../dashboard/dashboard';
const Main = lazy(() => import('../../components/profile/main'));

const RegUsers = () => {
	return (
		<Dashboard>
			<Suspense fallback={<CircularLoader/>}>
				<Main />
			</Suspense>
		</Dashboard>
	);
};

export default RegUsers;
