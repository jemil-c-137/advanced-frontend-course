import type { FC } from 'react';

import classes from './PageLoader.module.scss';
import { Loader } from '../Loader/Loader';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classes.pageLoader}>
            <Loader />
        </div>
    );
};
