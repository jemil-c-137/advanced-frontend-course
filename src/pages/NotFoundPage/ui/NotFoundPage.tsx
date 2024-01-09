import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = () => {
    const { t } = useTranslation();

    return <div className={classes.notFoundPage}>{t('pageNotFound')}</div>;
};
