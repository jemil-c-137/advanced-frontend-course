import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { RoutePath } from '@/shared/const/router';

export const AvatarDropdown = memo(() => {
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    return (
        <Dropdown
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable
                    ? [{ content: t('Admin panel'), href: RoutePath.admin_panel }]
                    : []),
                { content: t('profile'), onClick: () => {}, href: RoutePath.profile + authData!.id },
                { content: t('logout'), onClick: onLogout },
            ]}
            trigger={<Avatar size={30} src={authData!.avatar!} />} />
    );
});

AvatarDropdown.displayName = 'AvatarDropdown';
