import { configureStore, getDefaultMiddleware, ReducersMapObject } from '@reduxjs/toolkit';
import { profileReducer } from 'entities/Profile';
import { NavigateOptions, To } from 'react-router-dom';
import { api } from 'shared/api/api';
import { userReducer } from '../../../../entities/User';
import { createReducerManager } from './reducersManager';
import { StateSchema } from './StoreSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api,
                    navigate,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
