import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from "../providers/store";
interface ProtectedRouteProps {
    children: JSX.Element;
    routeId?: number | string ;
}

const ProtectedRoute = ({children, routeId } : ProtectedRouteProps) => {
    const sessionDetails = useSelector((state: RootState) => state?.AuthUser?.userDetails)

    // const user = useSelector((state: RootState) => state?.AuthUser?.userDetails)

	const location = useLocation();
    // eslint-disable-next-line
    // return sessionDetails?.Token ? children : <Navigate to={'/'} state={{from: location}} />
        return sessionDetails?.Token ? children : <Navigate to={'/'} state={{from: location}} />

};

export default ProtectedRoute;