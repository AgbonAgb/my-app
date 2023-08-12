import { Route, Routes } from 'react-router-dom';
import Homepage from './page/home';
import Login from './page/login/login';
import Welcomback from './page/welcomback';
import Creataccount from './page/createaccount'

function App() {
	return (
		<Routes>
			<Route element={<Homepage />} path='/' />
			<Route element={<Login />} path='/login' />
			<Route element={<Welcomback />} path='/Welcomback' />
			<Route element={<Creataccount />} path='/Creataccount' />
		</Routes>
	);
}

export default App;
