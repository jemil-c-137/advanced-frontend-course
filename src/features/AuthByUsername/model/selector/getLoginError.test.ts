import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'login error',
            },
        };

        expect(getLoginError(state as StateSchema)).toBe('login error');
    });

    test('should return empty string on empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toBe('');
    });
});
