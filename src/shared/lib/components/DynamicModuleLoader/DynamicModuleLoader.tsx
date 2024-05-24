import { Reducer } from '@reduxjs/toolkit';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StoreSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    const { children, reducers, removeAfterUnmount } = props;

    const reducersList = Object.entries(reducers);

    useEffect(() => {
        reducersList.forEach((reducerItem: ReducerListEntry) => {
            const [reducerKey, reducer] = reducerItem;
            store.reducerManager.add(reducerKey, reducer);
            dispatch({ type: `init ${reducerKey}` });
        });

        return () => {
            if (removeAfterUnmount) {
                reducersList.forEach((reducerItem: ReducerListEntry) => {
                    const [reducerKey] = reducerItem;
                    store.reducerManager.remove(reducerKey);
                    dispatch({ type: `remove ${reducerKey}` });
                });
            }
        };
    }, [dispatch, reducersList, removeAfterUnmount, store.reducerManager]);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
