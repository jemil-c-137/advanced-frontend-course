import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error message',
            },
        };

        expect(getProfileError(state as StateSchema)).toBe('error message');
    });

    test('should return undefined on empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});
