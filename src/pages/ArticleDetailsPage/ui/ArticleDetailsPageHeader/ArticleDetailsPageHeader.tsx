import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ArticleDetailsPageHeader.module.scss';

export const ArticleDetailsPageHeader = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const backToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    return (
        <div className={cls.articleDetailsHeader}>
            <Button theme={ButtonTheme.OUTLINE} onClick={backToList}>
                {t('toArticlesList')}
            </Button>
            <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={backToList}>
                {t('edit')}
            </Button>
        </div>
    );
};
