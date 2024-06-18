import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateSchema, ThunkExtraArg } from './config/StoreSchema';

export {
    StoreProvider, createReduxStore, StateSchema, ThunkExtraArg,
};
