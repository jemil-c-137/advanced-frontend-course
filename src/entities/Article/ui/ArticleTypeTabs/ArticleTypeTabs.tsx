import { getArticlesPageType } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/ArticlesPageSlice';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/constants/constants';

export const ArticleTypeTabs = memo(() => {
    const { t } = useTranslation();
    const type = useSelector(getArticlesPageType);
    const dispatch = useAppDispatch();

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('all'),
        },
        {
            value: ArticleType.IT,
            content: t('it'),
        },
        {
            value: ArticleType.ECNOMICS,
            content: t('economics'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('scienceit'),
        },
    ], [t]);

    const onChangeTab = useCallback((tab: TabItem) => {
        dispatch(articlesPageActions.setType(tab.value as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    return (
        <Tabs tabs={typeTabs} onTabClick={onChangeTab} value={type} />
    );
});

ArticleTypeTabs.displayName = 'ArticleTypeTabs';
