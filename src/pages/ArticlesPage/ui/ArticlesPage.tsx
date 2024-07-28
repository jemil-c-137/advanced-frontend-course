import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

const ArticlesPage = () => {
    const { t } = useTranslation();

    return (
        <div className={cls.articlesPage}>{t('main page')}</div>
    );
};

export default memo(ArticlesPage);
