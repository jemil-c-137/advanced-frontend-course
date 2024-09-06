import { getUserAuthData } from 'entities/User';
import { getUserRoles } from 'entities/User/model/selectors/getUserRoles/getUserRoles';
import { UserRole } from 'entities/User/model/types/user';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export default function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) return true;

        return roles.some((requiredRole) => userRoles?.includes(requiredRole));
    }, [userRoles, roles]);

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} />;
    }

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} />;
    }

    return children;
}
