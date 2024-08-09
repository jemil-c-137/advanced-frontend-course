import {
    ArticlesList, ArticlesViewSelector, ArticleView,
} from 'entities/Article';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchArticlesNextPage } from '../model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/ArticlesPageSlice';
import cls from './ArticlesPage.module.scss';

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchArticlesNextPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page onScrollBottom={onLoadNextPart} className={cls.articlesPage}>
                <ArticlesViewSelector view={view} onViewClick={onChangeView} />
                <ArticlesList
                    isLoading={isLoading}
                    articles={articles}
                    view={view || ArticleView.GRID} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
