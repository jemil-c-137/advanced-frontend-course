import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: StoryFn) => (
    <StoreProvider
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        initialState={state as StateSchema}>
        <StoryComponent />
    </StoreProvider>
);
