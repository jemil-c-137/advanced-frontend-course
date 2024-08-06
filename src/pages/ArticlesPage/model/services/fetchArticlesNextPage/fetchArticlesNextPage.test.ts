import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchArticlesNextPage } from './fetchArticlesNextPage';

jest.mock('../fetchArticlesList/fetchArticlesList.ts');

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const data = 'data';

describe('fetchArticlesNextPage', () => {
    test('should successfully call', async () => {
        mockedAxios.get.mockReturnValueOnce(
            Promise.resolve({ data }),
        );
        const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        const result = await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });

    test('should error', async () => {
        mockedAxios.get.mockReturnValueOnce(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(fetchArticlesNextPage);
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});

describe('fetchArticlesNextPage', () => {
    test('fetchArticlesList not called', async () => {
        mockedAxios.get.mockReturnValueOnce(
            Promise.resolve({ data }),
        );
        const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        expect(thunk.dispatch).not.toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
