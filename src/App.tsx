import { Route, Routes } from 'react-router-dom';
import Homepage from './page/home';
import Login from './page/login/login';
import Welcomback from './page/welcomback';
import Creataccount from './page/createaccount';
<<<<<<< HEAD
//import Dashboard from './page/dashboard/dashboard';
import CourseReg from './page/courseReg/courseReg'
import RegisterredUsers from './page/regUsers/regUsers'
=======
// import Dashboard from './page/dashboard/dashboard';
import CourseReg from './page/courseReg/courseReg'
import Allusers from "./page/allUsers/allUsers"
import ProtectedRoute from './hooks/protectedRoutes';
>>>>>>> 03ec77d06edc1f9ae7b49274c200f29970d422ec

function App() {
	return (
		<Routes>
			<Route element={<Homepage />} path='/' />
			<Route element={<Login />} path='/login' />
			<Route element={<Welcomback />} path='/welcomback' />
			<Route element={<Creataccount />} path='/create-account' />
<<<<<<< HEAD
			<Route element={<CourseReg />} path='/dashboard' />
			<Route element={<RegisterredUsers />} path='/registerredusers' />
=======
			<Route element={<Allusers />} path='/all-users' />

			<Route path='/course-registration' element={<ProtectedRoute ><CourseReg/></ProtectedRoute>} />

>>>>>>> 03ec77d06edc1f9ae7b49274c200f29970d422ec
		</Routes>
	);
}

export default App;
