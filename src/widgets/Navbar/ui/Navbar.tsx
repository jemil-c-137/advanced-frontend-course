import {
    memo, PropsWithChildren, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { NotificationsButton } from 'features/NotificationsButton';
import { AvatarDropdown } from 'features/AvatarDropdown';
import { Drawer } from 'shared/ui/Drawer/Drawer';
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

    const onCloseModal = useCallback(() => {
        setIsAuthMode(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthMode(true);
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    if (authData) {
        return (
            <div className={classNames(cls.navbar)}>
                <Text title={t('appTitle')} theme={TextTheme.INVERTED} className={cls.appName} />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}>
                    {t('createArticle')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <button type="button" onClick={handleClick}>{t('logout')}</button>
                    <Drawer isOpen={isOpen}>
                        {t('noDataError')}
                    </Drawer>
                    <NotificationsButton />
                    <AvatarDropdown />
                </HStack>
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
