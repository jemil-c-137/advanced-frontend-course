import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { getProfileData } from './getProfileData';

const data = {
    first: 'name',
    lastname: 'lastname',
    age: 22,
    currency: Currency.EUR,
    city: 'city',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png',
    country: Country.Italy,
    username: 'username',
};

describe('getProfileData', () => {
    test('should return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toBe(data);
    });

    test('should return undefined on empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
