import { lazy, Suspense } from "react";
import Dashboard from "../dashboard/dashboard";
import CircularLoader from "../../custom/circularLoader/circularLoader";
const Main = lazy(() => import('../../components/applicationStatus/applicationStatus'))

const CourseReg = () => {
    return (
        <Dashboard 
        heading="Application Status"
        paragraph="Your application has been submitted." 

    >
        <Suspense fallback={<CircularLoader/>}>
            <Main/>
        </Suspense>
    </Dashboard>
    )
}

export default CourseReg;
