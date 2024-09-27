import {
    memo, PropsWithChildren, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationsButton } from '@/features/NotificationsButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';
import { getUserAuthData } from '../../../entities/User';
import { getRouteArticleCreate } from '@/shared/const/router';
import { MyLink, MyLinkTheme } from '@/shared/ui/MyLink';

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

    if (authData) {
        return (
            <div className={classNames(cls.navbar)}>
                <Text title={t('appTitle')} theme={TextTheme.INVERTED} className={cls.appName} />
                <MyLink
                    to={getRouteArticleCreate()}
                    theme={MyLinkTheme.SECONDARY}>
                    {t('createArticle')}
                </MyLink>
                <HStack gap="16" className={cls.actions}>
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
