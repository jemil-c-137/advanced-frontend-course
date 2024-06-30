import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileReadonly, profileActions, updateProfileData } from '../../../../entities/Profile';
import cls from './ProfilePageHeader.module.scss';

export const ProfilePageHeader = () => {
    const { t } = useTranslation();

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={cls.profilePageHeader}>
            <Text title={t('profile')} />
            {readonly ? (
                <Button className={cls.editBtn} onClick={onEdit}>
                    {t('profileEdit')}
                </Button>
            ) : (
                <div>
                    <Button className={cls.editBtn} onClick={onSave}>
                        {t('Save')}
                    </Button>
                    <Button className={cls.editBtn} onClick={onCancelEdit}>
                        {t('Cancel')}
                    </Button>
                </div>
            ) }
        </div>
    );
};
