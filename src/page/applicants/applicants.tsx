import { lazy, Suspense } from 'react';
import CircularLoader from "../../custom/circularLoader/circularLoader";
import Dashboard from '../dashboard/dashboard';
const Main = lazy(() => import('../../components/applicants/main'));

const Applicant = () => {
	return (
		<Dashboard
		 sideHeading='Applicants'
		//  paragraph='Successfully Registered Students,'
		 >
			<Suspense fallback={<CircularLoader/>}>
				<Main />
			</Suspense>
		</Dashboard>
	);
};

export default Applicant;
