import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../../../../entities/Profile';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
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
