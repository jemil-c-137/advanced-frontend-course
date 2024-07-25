import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData', () => {
    test('should successfully retrieve data', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without firstname and lastname', async () => {
        const result = validateProfileData({
            age: 22,
            currency: Currency.EUR,
            city: 'city',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png',
            country: Country.Italy,
            username: 'username',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({
            first: 'name',
            lastname: 'lastname',
            age: undefined,
            currency: Currency.EUR,
            city: 'city',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png',
            country: Country.Italy,
            username: 'username',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({
            first: 'name',
            lastname: 'lastname',
            age: 22,
            currency: Currency.EUR,
            city: 'city',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png',
            country: undefined,
            username: 'username',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('multiple errors', async () => {
        const result = validateProfileData({
            first: undefined,
            lastname: undefined,
            age: undefined,
            currency: Currency.EUR,
            city: 'city',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png',
            country: undefined,
            username: 'username',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]);
    });
});
