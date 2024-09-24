import { Reducer } from '@reduxjs/toolkit';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from '@/app/providers/StoreProvider';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    const { children, reducers, removeAfterUnmount } = props;

    const reducersList = Object.entries(reducers);

    useEffect(() => {
        const mountedReducers = store.reducerManager.gotMountedReducers();
        reducersList.forEach(([reducerKey, reducer]) => {
            const mounted = mountedReducers[reducerKey as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
                dispatch({ type: `init ${reducerKey}` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                reducersList.forEach((reducerItem) => {
                    const [reducerKey] = reducerItem;
                    store.reducerManager.remove(reducerKey as StateSchemaKey);
                    dispatch({ type: `remove ${reducerKey}` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
