import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div>{t('loading')}</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route element={<div className="page-wrapper">{element}</div>} path={path} key={path} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
