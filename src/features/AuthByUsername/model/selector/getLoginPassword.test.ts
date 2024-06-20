import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return value of loading state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toBe('123');
    });

    test('should return false on empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
