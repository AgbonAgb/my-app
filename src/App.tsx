import { Route, Routes } from 'react-router-dom';
import Homepage from './page/home';
import Login from './page/login/login';
import Welcomback from './page/welcomback';
import Creataccount from './page/createaccount';

function App() {
	return (
		<Routes>
			<Route element={<Homepage />} path='/' />
			<Route element={<Login />} path='/login' />
			<Route element={<Welcomback />} path='/welcomback' />
			<Route element={<Creataccount />} path='/create-account' />
		</Routes>
	);
}

export default App;
