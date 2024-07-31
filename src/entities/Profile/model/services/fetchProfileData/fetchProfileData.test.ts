import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const data = 'data';

describe('fetchProfileData', () => {
    test('should successfully retrieve data', async () => {
        mockedAxios.get.mockReturnValueOnce(
            Promise.resolve({ data }),
        );
        const thunk = new TestAsyncThunk(fetchProfileData);

        const result = await thunk.callThunk('1');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(data);
    });

    test('should error', async () => {
        mockedAxios.get.mockReturnValueOnce(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(fetchProfileData);
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
