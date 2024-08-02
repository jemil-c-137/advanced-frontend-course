import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticlesListItem/ArticlesListItem';

import cls from './ArticlesList.module.scss';

interface ArticlesListProps {
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticlesList = ({
    articles, isLoading, view = ArticleView.GRID,
}: ArticlesListProps) => {
    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} />
    );

    return (
        <div className={cls.articlesList}>{articles.length ? articles.map(renderArticle) : null}</div>
    );
};
