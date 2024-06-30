import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { getProfileForm } from '../../selectors/getProfileForm';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    try {
        const formData = getProfileForm(getState());

        const response = await extra.api.put<Profile>(
            '/profile',
            formData,
        );

        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue('login error');
    }
});
