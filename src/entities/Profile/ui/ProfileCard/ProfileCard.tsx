import { getProfileData } from 'entities/Profile/model/selectors/getprofileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';

export const ProfileCard = () => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={cls.profileCard}>
            <div className={cls.header}>
                <Text title={t('profile')} />
                <Button className={cls.editBtn}>
                    {t('profileEdit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first || ''} placeholder={t('yourName')} className={cls.input} />
                <Input value={data?.lastname || ''} placeholder={t('yourLastName')} className={cls.input} />
            </div>
        </div>
    );
};
