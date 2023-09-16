import { ComponentType } from 'react';
import { useAuth } from './useAuth';
import { Navigate } from 'react-router-dom';

export const auth = (Component: ComponentType) => {
	const Auth = (props: JSX.IntrinsicAttributes) => {
		const token = useAuth();

		return token ? <Component {...props} /> : <Navigate to='/login' />;
	};

	return Auth;
};
