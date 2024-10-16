import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { PageLoader } from '@/shared/ui/PageLoader';
import {
    getUserInited,
    initAuthData,
} from '@/entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export function App() {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    const isInited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
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
