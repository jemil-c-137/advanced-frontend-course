import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

const updatedProfile = {
    username: 'some name',
    age: 33,
    lastname: 'doe',
    country: Country.Australia,
    city: 'some city',
    first: 'john',
    avatar: 'avatar',
    currency: Currency.USD,
};

describe('profileSlice', () => {
    test('should set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(
            profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
        ).toEqual({ readonly: true });
    });

    test('should cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: updatedProfile,
            validationErrors: undefined,
            readonly: true,
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            data, form: data, validationErrors: undefined, readonly: true,
        });
    });

    test('should updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: {},
            validationErrors: undefined,
            readonly: true,
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile(updatedProfile)),
        ).toEqual({
            data, form: updatedProfile, validationErrors: undefined, readonly: true,
        });
    });

    test('should update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false, validationErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({ isLoading: true, validationErrors: undefined });
    });

    test('should update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false, validationErrors: undefined, readonly: true, form: data, data,
        });
    });
});
