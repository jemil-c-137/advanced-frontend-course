import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StoreSchema';
import { SortOrder } from '@/shared/types';
import { ArticlesSortField, ArticleType } from '@/entities/Article';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { dispatch, getState } = thunkApi;
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                const orderFromUrl = searchParams.get('order');
                const sortFromUrl = searchParams.get('sort');
                const searchFromUrl = searchParams.get('search');
                const typeFromUrl = searchParams.get('type');

                if (orderFromUrl) dispatch(articlesPageActions.setOrder(orderFromUrl as SortOrder));
                if (sortFromUrl) dispatch(articlesPageActions.setSort(sortFromUrl as ArticlesSortField));
                if (searchFromUrl) dispatch(articlesPageActions.setSearch(searchFromUrl));
                if (typeFromUrl) dispatch(articlesPageActions.setType(typeFromUrl as ArticleType));

                dispatch(fetchArticlesList({}));
                dispatch(articlesPageActions.initView());
            }
        },
    );
