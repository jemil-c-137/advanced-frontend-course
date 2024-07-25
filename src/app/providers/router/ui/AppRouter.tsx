import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

    const { t } = useTranslation();

    return (
        <Routes>
            {routes.map(({ element, path }) => (
                <Route
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    )}
                    path={path}
                    key={path} />
            ))}
        </Routes>
    );
};

export default memo(AppRouter);
