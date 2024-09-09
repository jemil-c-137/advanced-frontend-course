import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    Article,
    ArticleView,
    ArticlesSortField,
    ArticleType,
} from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage
    || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        view: ArticleView.GRID,
        page: 1,
        hasMore: true,
        ids: [],
        entities: {
        },
        _inited: false,
        search: '',
        order: 'asc',
        sort: ArticlesSortField.CREATED,
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticlesSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initView: (state) => {
            state.view = (localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView) || ArticleView.LIST;
            state.limit = state.view === ArticleView.LIST ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;

            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state);
            }
        });
        builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasMore = action.payload.length > (state.limit || 0);

            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload);
            } else {
                articlesAdapter.addMany(state, action.payload);
            }
        });
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
