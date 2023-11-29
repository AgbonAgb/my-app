import { Route, Routes } from 'react-router-dom';
import Homepage from './page/home';
import Login from './page/login/login';
import Welcomback from './page/welcomback';
import Creataccount from './page/createaccount';
import CourseReg from './page/courseReg/courseReg'
import RegisterredUsers from './page/regUsers/regUsers'
import ProtectedRoute from './hooks/protectedRoutes';
import ApplicationForm from './page/applicationForm/main'
import ApplicationStatus from './page/applicationStatus/main'
import Notification from './page/notification/notification'
import Profile from './page/profile/profile'
import AdminDashboard from './page/admin/dashboard/main'
import Applicants from './page/applicants/applicants'



function App() {
	return (
		<Routes>
			<Route element={<Homepage />} path='/' />
			<Route element={<Login />} path='/login' />
			<Route element={<Welcomback />} path='/welcomback' />
			<Route element={<Creataccount />} path='/create-account' />

			<Route path='/course-registration' element={<ProtectedRoute ><CourseReg/></ProtectedRoute>} />
			<Route path='/registerredusers' element={<ProtectedRoute ><RegisterredUsers/></ProtectedRoute>} />
			<Route path='/application-form' element={<ProtectedRoute ><ApplicationForm/></ProtectedRoute>} />
			<Route path='/application-status' element={<ProtectedRoute ><ApplicationStatus/></ProtectedRoute>} />
			<Route path='/notification' element={<ProtectedRoute ><Notification/></ProtectedRoute>} />
			<Route path='/dashboard' element={<ProtectedRoute ><Profile/></ProtectedRoute>} />
			<Route path='/applicants' element={<ProtectedRoute ><Applicants/></ProtectedRoute>} />



			{/* Admin */}
			<Route path='/admin-dashboard' element={<ProtectedRoute ><AdminDashboard/></ProtectedRoute>} />






		</Routes>
	);
}

export default App;
