import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StoreSchema';
import { getArticleDetailsData } from 'entities/Article';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { getUserAuthData } from '../../../../../entities/User';
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors';

export const sendComment = createAsyncThunk<
    Comment,
    void,
    ThunkConfig<string>
>('addCommentForm/sendComment', async (authData, thunkApi) => {
    const {
        dispatch, extra, rejectWithValue, getState,
    } = thunkApi;

    const userData = getUserAuthData(getState());
    const text = getAddCommentFormText(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
        rejectWithValue('no data');
    }

    try {
        const response = await extra.api.post<Comment>(
            '/comments',
            {
                articleId: article?.id,
                userId: userData?.id,
                text,
            },
        );

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        // dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue('login error');
    }
});
