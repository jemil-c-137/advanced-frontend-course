import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StoreSchema';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = ({
    children,
    initialState,
    asyncReducers,
}) => {
    // const navigate = useNavigate();
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject);

    return <Provider store={store}>{children}</Provider>;
};
