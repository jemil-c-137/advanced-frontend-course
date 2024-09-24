import axios from 'axios';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/TestAsyncThunk/TestAsyncThunk';
import { loginByUserName } from './loginByUserName';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
    /*
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('should return user', async () => {
        const userValue = { username: 'user', id: '1' };
        mockedAxios.post.mockReturnValueOnce(
            Promise.resolve({ data: userValue })
        );
        const action = loginByUserName({ username: 'user', password: '123' });
        const result = await action(dispatch, getState, undefined);

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue)
        );
    });

    test('should not return user', async () => {
        mockedAxios.post.mockReturnValueOnce(Promise.resolve({ status: 403 }));
        const action = loginByUserName({ username: 'user', password: '123' });
        const result = await action(dispatch, getState, undefined);

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('login error');
    });
    */
    test('should login successful', async () => {
        const userValue = { username: 'user', id: '1' };
        mockedAxios.post.mockReturnValueOnce(
            Promise.resolve({ data: userValue }),
        );
        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({
            username: 'user',
            password: '123',
        });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue),
        );
    });

    test('should not return user', async () => {
        mockedAxios.post.mockReturnValueOnce(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({
            username: 'user',
            password: '123',
        });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('login error');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
