import { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StoreSchema';

interface StoreProviderProps {
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};
