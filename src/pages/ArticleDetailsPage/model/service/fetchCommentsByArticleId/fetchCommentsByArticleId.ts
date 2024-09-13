import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StoreSchema';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
    >(
        'articleDetails/fetchCommentsByArticleId',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;
            try {
                if (!articleId) {
                    return rejectWithValue('no id');
                }

                const response = await extra.api.get<Comment[]>('/comments', {
                    params: {
                        articleId,
                        _expand: 'user',
                    },
                });

                console.log(response, 'response');

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (error) {
                console.log(error);
                return rejectWithValue('login error');
            }
        },
    );
