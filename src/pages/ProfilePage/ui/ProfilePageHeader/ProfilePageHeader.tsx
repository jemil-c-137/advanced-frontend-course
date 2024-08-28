import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from '../../../../entities/Profile';

export const ProfilePageHeader = () => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
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
        <HStack max justify="between">
            <Text title={t('profile')} />
            {canEdit && (
                (readonly ? (
                    <Button onClick={onEdit}>
                        {t('profileEdit')}
                    </Button>
                ) : (
                    <HStack gap="8">
                        <Button onClick={onSave}>
                            {t('Save')}
                        </Button>
                        <Button onClick={onCancelEdit}>
                            {t('Cancel')}
                        </Button>
                    </HStack>
                ))
            )}
        </HStack>
    );
};
