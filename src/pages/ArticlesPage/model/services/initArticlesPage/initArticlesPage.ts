import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (_, thunkApi) => {
            const { dispatch, getState } = thunkApi;
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                dispatch(fetchArticlesList({ page: 1 }));
                dispatch(articlesPageActions.initView());
            }
        },
    );
