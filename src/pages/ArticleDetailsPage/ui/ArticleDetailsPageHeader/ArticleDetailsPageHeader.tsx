import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCanEditArticles } from '@/pages/ArticleDetailsPage/model/selectors/article';
import { getArticleDetailsData } from '@/entities/Article';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

export const ArticleDetailsPageHeader = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticles);

    const backToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const editArticle = useCallback(() => {
        navigate(getRouteArticleEdit(article!.id));
    }, [navigate, article]);

    return (
        <HStack justify="between" max>
            <Button theme={ButtonTheme.OUTLINE} onClick={backToList}>
                {t('toArticlesList')}
            </Button>
            {
                canEdit && (
                    <Button theme={ButtonTheme.OUTLINE} onClick={editArticle}>
                        {t('edit')}
                    </Button>
                )
            }
        </HStack>
    );
};
