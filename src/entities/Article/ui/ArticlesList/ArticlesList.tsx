import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItemSkeleton } from '../ArticlesListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticlesListItem/ArticlesListItem';

import cls from './ArticlesList.module.scss';

interface ArticlesListProps {
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    className?: string;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3).fill(0).map((i, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton key={index} view={view} />
));

export const ArticlesList = ({
    articles, isLoading, view = ArticleView.GRID, className,
}: ArticlesListProps) => {
    const { t } = useTranslation();
    const renderArticle = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view} />
    );

    if (!isLoading && !articles.length) {
        return (
            <div>
                {t('noDataError')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.articlesList, {}, [cls[view], className])}>
            {articles.length ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
