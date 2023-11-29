import { lazy, Suspense } from 'react';
import CircularLoader from "../../custom/circularLoader/circularLoader";
import Dashboard from '../dashboard/dashboard';
import { Dna } from 'react-loader-spinner';
const Main = lazy(() => import('../../components/notification/main'));

const RegUsers = () => {
	return (
		<Dashboard
		 sideHeading='Notifications'
		//  paragraph='Successfully Registered Students,'
		 >
			<Suspense fallback={<CircularLoader/>}>
				<Main />
			</Suspense>
		</Dashboard>
	);
};

export default RegUsers;
