import { lazy, Suspense } from "react";
// import Fallback from "../custom/fallback/fallback";
//import Dashboard from "../mydashboard/dashboard";
import Dashboard from '../dashboard/dashboard'
const Main = lazy(() => import('../../components/users/registeredUsers'))
//const Main = lazy(() => import('../../components/courseReg/courseReg'))
//import Main from '../../components/users/registeredUsers'

const RegUsers = () => {
    return (
        <Dashboard
            heading="Registerred Users"
            paragraph="Successfully Registered Students,"
        >
            {/* <Suspense fallback={<CircularLoader/>}> */}
            <Main />
            {/* </Suspense> */}
        </Dashboard>
    )
}

export default RegUsers;