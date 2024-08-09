import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getSavedScroll = (state: StateSchema) => state.scrollSave.scroll;
export const getSavedScrollPath = createSelector(
    getSavedScroll,
    (state: StateSchema, path: string) => path,
    // @ts-ignore
    (scroll, path) => (scroll[path] || 0),
);
