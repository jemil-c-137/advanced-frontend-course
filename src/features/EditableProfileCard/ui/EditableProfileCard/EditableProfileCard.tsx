import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    EditableProfileCardActions,
    EditableProfileCardReducer,
} from 'features/EditableProfileCard/model/slices/EditableProfileCardSlice';
import cls from './EditableProfileCard.module.scss';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidationErrors/getProfileValidateError';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

const reducer: ReducerList = {
    profile: EditableProfileCardReducer,
};

interface EditableProfileCardProps {
    className?: string;
    id: string
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

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
        dispatch(fetchProfileData(id));
    });

    const onFirstNameChange = useCallback((value: string) => {
        dispatch(EditableProfileCardActions.updateProfile({ first: value }));
    }, [dispatch]);

    const onLastNameChange = useCallback((value: string) => {
        dispatch(EditableProfileCardActions.updateProfile({ lastname: value }));
    }, [dispatch]);

    const onAgeChange = useCallback((value: string) => {
        dispatch(EditableProfileCardActions.updateProfile({ age: +value }));
    }, [dispatch]);

    const onCityChange = useCallback((value: string) => {
        dispatch(EditableProfileCardActions.updateProfile({ city: value }));
    }, [dispatch]);

    const onAvatarChange = useCallback((value: string) => {
        dispatch(EditableProfileCardActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(EditableProfileCardActions.updateProfile({ username: value }));
    }, [dispatch]);

    const onCurrencyChange = useCallback((value: Currency) => {
        dispatch(EditableProfileCardActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onCountryChange = useCallback((value: Country) => {
        dispatch(EditableProfileCardActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <EditableProfileCardHeader />
            <div className={classNames('', {}, [className])}>
                {validateErrors && validateErrors.map((err) => (
                    <Text
                        data-testid="EditableProfileCard.Error"
                        theme={TextTheme.ERROR}
                        title={err}
                        text={validateErrorsTranslations[err]}
                        key={err} />
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
            </div>
        </DynamicModuleLoader>
    );
});

EditableProfileCard.displayName = 'EditableProfileCard';
