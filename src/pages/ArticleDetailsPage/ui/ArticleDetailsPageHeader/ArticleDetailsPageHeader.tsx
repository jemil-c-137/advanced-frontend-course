import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticles } from 'pages/ArticleDetailsPage/model/selectors/article';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ArticleDetailsPageHeader.module.scss';

export const ArticleDetailsPageHeader = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticles);

    const backToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const editArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article!.id}/edit`);
    }, [navigate, article]);

    return (
        <div className={cls.articleDetailsHeader}>
            <Button theme={ButtonTheme.OUTLINE} onClick={backToList}>
                {t('toArticlesList')}
            </Button>
            {
                canEdit && (
                    <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={editArticle}>
                        {t('edit')}
                    </Button>
                )
            }
        </div>
    );
};
