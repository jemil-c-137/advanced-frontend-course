import { ArticlesViewSelector, ArticleView } from 'entities/Article';
import { getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/ArticlesPageSlice';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const ArticlePageFilters = () => {
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <div>
            <ArticlesViewSelector view={view} onViewClick={onChangeView} />
        </div>
    );
};
