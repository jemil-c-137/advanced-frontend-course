import { memo, Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '@/shared/ui/PageLoader';
import RequireAuth from './RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
                path={route.path}
                key={route.path} />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
