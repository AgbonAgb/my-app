import { Route, Routes } from 'react-router-dom';
import Homepage from './page/home';
import Login from './page/login/login';
import Welcomback from './page/welcomback';
import Creataccount from './page/createaccount';
//import Dashboard from './page/dashboard/dashboard';
import CourseReg from './page/courseReg/courseReg'
import RegisterredUsers from './page/regUsers/regUsers'

function App() {
	return (
		<Routes>
			<Route element={<Homepage />} path='/' />
			<Route element={<Login />} path='/login' />
			<Route element={<Welcomback />} path='/welcomback' />
			<Route element={<Creataccount />} path='/create-account' />
			<Route element={<CourseReg />} path='/dashboard' />
			<Route element={<RegisterredUsers />} path='/registerredusers' />
		</Routes>
	);
}

export default App;
