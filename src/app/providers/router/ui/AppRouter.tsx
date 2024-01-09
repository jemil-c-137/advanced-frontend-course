import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => {
    const { t } = useTranslation();

    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    )}
                    path={path}
                    key={path}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
