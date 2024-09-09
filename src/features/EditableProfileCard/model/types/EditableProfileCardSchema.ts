import { Profile } from 'entities/Profile/model/types/profile';
import { ValidateProfileError } from '../constants/constants';

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validationErrors?: ValidateProfileError[];
}
