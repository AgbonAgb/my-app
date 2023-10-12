import { lazy, Suspense } from "react";
import Dashboard from "../dashboard/dashboard";
import CircularLoader from "../../custom/circularLoader/circularLoader";
const Main = lazy(() => import('../../components/applicationForm/main'))

const CourseReg = () => {
    return (
        <Dashboard 
        heading="Application Form"
    >
        <Suspense fallback={<CircularLoader/>}>
            <Main/>
        </Suspense>
    </Dashboard>
    )
}

export default CourseReg;
