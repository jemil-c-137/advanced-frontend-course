import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StoreSchema';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/fetchArticleById', async (jsonSettings, thunkApi) => {
    const { getState, rejectWithValue, dispatch } = thunkApi;
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
        rejectWithValue('no user data');
    }
    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData!.id,
                jsonSettings: {
                    ...currentSettings,
                    ...jsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('no data');
        }

        return response.jsonSettings as JsonSettings;
    } catch (error) {
        console.log(error);
        return rejectWithValue('no data');
    }
});
