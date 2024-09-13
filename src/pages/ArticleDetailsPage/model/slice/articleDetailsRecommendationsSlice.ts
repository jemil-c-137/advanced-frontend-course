import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { fetchArticlesRecommendations } from '../service/fetchArticlesRecommendations/fetchArticlesRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

const initialState = {
    isLoading: false,
    ids: [],
    entities: {
    },
};

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations
    || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesRecommendations.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchArticlesRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false;
            recommendationsAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchArticlesRecommendations.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
export const { actions: articleDetailsRecommendationsActions } = articleDetailsRecommendationsSlice;
