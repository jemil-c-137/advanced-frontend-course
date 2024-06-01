import { DeepPartial } from '@reduxjs/toolkit';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('should set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setUserName('new')),
        ).toEqual({ username: 'new' });
    });

    test('should set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'user' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('new')),
        ).toEqual({ password: 'new' });
    });
});
