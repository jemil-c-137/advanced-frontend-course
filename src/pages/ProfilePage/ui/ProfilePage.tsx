import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';
import { ValidateProfileError } from '../../../entities/Profile/model/types/profile';
import { Currency } from '../../../entities/Currency';
import { Country } from '../../../entities/Country';
import {
    fetchProfileData,
    getProfileForm,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
    getProfileValidateErrors,
} from '../../../entities/Profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducer: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { id } = useParams<{id: string}>();
    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const isReadonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslations = {
        [ValidateProfileError.INCORRECT_AGE]: t('ageError'),
        [ValidateProfileError.NO_DATA]: t('noDataError'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('noDataError'),
        [ValidateProfileError.SERVER_ERROR]: t('serverError'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('countryError'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onFirstNameChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ first: value }));
    }, [dispatch]);

    const onLastNameChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);

    const onAgeChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: +value }));
    }, [dispatch]);

    const onCityChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);

    const onAvatarChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);

    const onCurrencyChange = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onCountryChange = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <Page>
                <ProfilePageHeader />
                {validateErrors && validateErrors.map((err) => (
                    <Text theme={TextTheme.ERROR} title={err} text={validateErrorsTranslations[err]} key={err} />
                ))}
                <ProfileCard
                    data={form}
                    isLoading={isLoading}
                    error={error}
                    isReadonly={isReadonly}
                    onFirstNameChange={onFirstNameChange}
                    onAgeChange={onAgeChange}
                    onCityChange={onCityChange}
                    onAvatarChange={onAvatarChange}
                    onUsernameChange={onUsernameChange}
                    onCurrencyChange={onCurrencyChange}
                    onCountryChange={onCountryChange}
                    onLastNameChange={onLastNameChange} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
