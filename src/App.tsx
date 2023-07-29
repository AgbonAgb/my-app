import { Route, Routes } from 'react-router-dom';
import Homepage from './page/home';
import Login from './page/login/login';
import Welcomback from './page/welcomback';

function App() {
	return (
		<Routes>
			<Route element={<Homepage />} path='/' />
			<Route element={<Login />} path='/login' />
			<Route element={<Welcomback />} path='/Welcomback' />
		</Routes>
	);
}

export default App;
