import { lazy, Suspense } from "react";
import Fallback from "../../custom/fallback/fallback";
import Dashboard from "../dashboard/dashboard";
import CircularLoader from "../../custom/circularLoader/circularLoader";
const Main = lazy(() => import('../../components/allUser/main'))

const CourseReg = () => {
    return (
        <Dashboard 
        heading="All Users"
    >
        <Suspense fallback={<CircularLoader/>}>
            <Main/>
        </Suspense>
    </Dashboard>
    )
}

export default CourseReg;