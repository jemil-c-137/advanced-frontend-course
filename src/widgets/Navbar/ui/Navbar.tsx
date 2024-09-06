import {
    memo, PropsWithChildren, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropwdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '../../../entities/User';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: PropsWithChildren<NavbarProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    const [isAuthMode, setIsAuthMode] = useState(false);

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthMode(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthMode(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    console.log(isAdminPanelAvailable, 'available');

    if (authData) {
        return (
            <div className={classNames(cls.navbar)}>
                <Text title={t('appTitle')} theme={TextTheme.INVERTED} className={cls.appName} />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}>
                    {t('createArticle')}
                </AppLink>
                <Dropdown
                    direction="bottom left"
                    className={cls.dropdown}
                    items={[
                        ...(isAdminPanelAvailable ? [{ content: t('Admin panel'), href: RoutePath.admin_panel }] : []),
                        { content: t('profile'), onClick: () => {}, href: RoutePath.profile + authData.id },
                        { content: t('logout'), onClick: onLogout },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar!} />} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onOpenModal}>
                {t('login')}
            </Button>

            {isAuthMode && (
                <LoginModal isOpen={isAuthMode} onClose={onCloseModal} />
            )}
        </div>
    );
});

Navbar.displayName = 'Navbar';
