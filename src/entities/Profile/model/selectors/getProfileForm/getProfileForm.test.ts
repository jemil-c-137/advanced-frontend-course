import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { getProfileForm } from './getProfileForm';

const form = {
    first: 'name',
    lastname: 'lastname',
    age: 22,
    currency: Currency.EUR,
    city: 'city',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png',
    country: Country.Italy,
    username: 'username',
};

describe('getProfileForm', () => {
    test('should return profile form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };

        expect(getProfileForm(state as StateSchema)).toBe(form);
    });

    test('should return empty string on empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
