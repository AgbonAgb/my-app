import Onboardlayout from '../../components/onboardinglayout';
import { lazy, Suspense } from "react"
//const Main = lazy(() => import("../../components/login/login"));
import Main from '../../components/login/login'; 

const Login = () => {
	return (
		<Suspense>
			<Onboardlayout heading='Welcome!' subheading='Log in to your account.'>
				<Main />
			</Onboardlayout>
		</Suspense>
	)
}
export default Login
