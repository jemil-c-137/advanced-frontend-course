import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Country, CountrySelect } from '../../../Country';
import { Currency, CurrencySelect } from '../../../Currency';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    isReadonly?: boolean;
    onFirstNameChange?: (value: string) => void;
    onLastNameChange?: (value: string) => void;
    onAgeChange?: (value: string) => void;
    onCityChange?: (value: string) => void;
    onUsernameChange?: (value: string) => void;
    onAvatarChange?: (value: string) => void;
    onCurrencyChange?: (value: Currency) => void;
    onCountryChange?: (value: Country) => void;
}

export const ProfileCard = ({
    data,
    isLoading,
    error,
    isReadonly,
    onFirstNameChange,
    onLastNameChange,
    onAgeChange,
    onCityChange,
    onUsernameChange,
    onAvatarChange,
    onCurrencyChange,
    onCountryChange,
}: ProfileCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [cls.error])}>
                <Text theme={TextTheme.ERROR} title={t('errorBoundaryMessage')} text={error} align={TextAlign.CENTER} />
            </div>
        );
    }

    const mods = {
        [cls.editing]: !isReadonly,
    };

    return (
        <div className={classNames(cls.profileCard, mods)}>
            <div className={cls.data}>
                {data?.avatar && <Avatar src={data.avatar} alt="" />}
                <Input
                    value={data?.first || ''}
                    placeholder={t('firstNamePlaceholder')}
                    onChange={onFirstNameChange}
                    className={cls.input}
                    readonly={isReadonly} />
                <Input
                    value={data?.lastname || ''}
                    placeholder={t('lastNamePlaceholder')}
                    onChange={onLastNameChange}
                    className={cls.input}
                    readonly={isReadonly} />

                <Input
                    value={data?.age || ''}
                    placeholder={t('agePlaceholder')}
                    onChange={onAgeChange}
                    className={cls.input}
                    readonly={isReadonly} />
                <Input
                    value={data?.city || ''}
                    placeholder={t('cityPlaceholder')}
                    onChange={onCityChange}
                    className={cls.input}
                    readonly={isReadonly} />

                <Input
                    value={data?.username || ''}
                    placeholder={t('usernamePlaceholder')}
                    onChange={onUsernameChange}
                    className={cls.input}
                    readonly={isReadonly} />
                <Input
                    value={data?.avatar || ''}
                    placeholder={t('avatarPlaceholder')}
                    onChange={onAvatarChange}
                    className={cls.input}
                    readonly={isReadonly} />
                {
                    (data?.currency && onCurrencyChange)
                    && (
                        <CurrencySelect
                            className={cls.input}
                            onChange={onCurrencyChange}
                            value={data.currency}
                            readonly={isReadonly} />
                    )
                }
                {
                    (data?.country && onCountryChange)
                    && (
                        <CountrySelect
                            className={cls.input}
                            onChange={onCountryChange}
                            value={data.country}
                            readonly={isReadonly} />
                    )
                }
            </div>
        </div>
    );
};
