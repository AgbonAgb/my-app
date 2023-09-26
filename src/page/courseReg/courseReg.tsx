import { lazy, Suspense } from "react";
import Fallback from "../../custom/fallback/fallback";
import Dashboard from "../dashboard/dashboard";
import CircularLoader from "../../custom/circularLoader/circularLoader";
const Main = lazy(() => import('../../components/courseReg/courseReg'))

const CourseReg = () => {
    return (
        <Dashboard 
        heading="Course Registration"
        paragraph="Register courses for the semester. You must have a minimum of 20 units per semester," 
    >
        <Suspense fallback={<CircularLoader/>}>
            <Main/>
        </Suspense>
    </Dashboard>
    )
}

export default CourseReg;