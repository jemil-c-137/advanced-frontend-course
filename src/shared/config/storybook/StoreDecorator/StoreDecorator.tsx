import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { EditableProfileCardReducer } from 'features/EditableProfileCard/model/slices/EditableProfileCardSlice';
import { articleDetailsPageReducers } from 'pages/ArticleDetailsPage/model/slice';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: EditableProfileCardReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducers,
    addCommentForm: addCommentFormReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => {
    const component = (StoryComponent: StoryFn) => (
        <StoreProvider
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            initialState={state as StateSchema}>
            <StoryComponent />
        </StoreProvider>
    );

    return component;
};
