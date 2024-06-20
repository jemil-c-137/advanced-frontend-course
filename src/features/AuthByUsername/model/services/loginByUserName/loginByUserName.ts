import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, userActions } from '../../../../../entities/User';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<
    User,
    LoginByUserNameProps,
    ThunkConfig<string>
>('login/fetchByIdStatus', async (authData, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.post(
            '/login',
            authData,
        );

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue('login error');
    }
});
