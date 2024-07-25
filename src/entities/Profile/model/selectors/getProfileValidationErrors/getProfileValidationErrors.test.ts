import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateError';

const validationErrors = [
    ValidateProfileError.INCORRECT_AGE,
];

describe('getProfileValidateErrors', () => {
    test('should return profile validation errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validationErrors,
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toBe(validationErrors);
    });

    test('should return undefined on empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
});
