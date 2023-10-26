import { lazy, Suspense } from "react";
import Dashboard from "../../dashboard/dashboard";
import CircularLoader from "../../../custom/circularLoader/circularLoader";
const Main = lazy(() => import('../../../components/Admin/dashboard/main'))

const CourseReg = () => {
    return (
        <Dashboard>
        <Suspense fallback={<CircularLoader/>}>
            <Main/>
        </Suspense>
    </Dashboard>
    )
}

export default CourseReg;
