/* eslint-disable max-len */
import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading;
export const getArticleDetailsRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations.error;
