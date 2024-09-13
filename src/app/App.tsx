import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { getUserInited, userActions } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

export function App() {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    const isInited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    });

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />

                    {isInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
