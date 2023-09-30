import { lazy, Suspense } from 'react';
// import Fallback from "../custom/fallback/fallback";
//import Dashboard from "../mydashboard/dashboard";
import Dashboard from '../dashboard/dashboard';
const Main = lazy(() => import('../../components/courseReg/courseReg'));

const CourseReg = () => {
	return (
		<Dashboard
			heading='Course Registration'
			paragraph='Register courses for the semester. You must have a minimum of 20 units per semester,'
		>
			<Suspense fallback={<p>loading...</p>}>
				<Main />
			</Suspense>
		</Dashboard>
	);
};

export default CourseReg;
