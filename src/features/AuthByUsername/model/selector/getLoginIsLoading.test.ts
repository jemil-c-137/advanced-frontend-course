import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('should return value of loading state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };

        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });

    test('should return false on empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});
