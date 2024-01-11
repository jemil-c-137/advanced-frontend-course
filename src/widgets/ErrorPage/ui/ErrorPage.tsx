import { useTranslation } from 'react-i18next';
import classes from './ErrorPage.module.scss';

export const ErrorPage = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classes.errorPage}>
            <h1>{t('errorBoundaryMessage')}</h1>

            <button onClick={() => reloadPage()} type="button">
                {t('reloadPage')}
            </button>
        </div>
    );
};
