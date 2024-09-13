import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticlesList, ArticleView } from '@/entities/Article';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { getArticles } from '@/pages/ArticlesPage/model/slices/ArticlesPageSlice';
import { Text } from '@/shared/ui/Text/Text';
import cls from './ArticleInfiniteList.module.scss';

export const ArticleInfiniteList = () => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const { t } = useTranslation();

    if (error) {
        return <Text title={t('noDataError')} />;
    }

    return (
        <ArticlesList
            className={cls.list}
            isLoading={isLoading}
            articles={articles}
            view={view || ArticleView.GRID} />
    );
};
