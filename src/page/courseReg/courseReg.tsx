import { lazy, Suspense } from "react";
// import Fallback from "../custom/fallback/fallback";
import Dashboard from "../dashboard/dashboard";
const Main = lazy(() => import('../../components/courseReg/courseReg'))

const CourseReg = () => {
    return (
        <Dashboard>
            {/* <Suspense fallback={<Fallback />}> */}
               <Main/>
            {/* </Suspense> */}
        </Dashboard>
    )
}

export default CourseReg;