import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar(props: PropsWithChildren<NavbarProps>) {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {t('main page')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t('about site')}
                </AppLink>
            </div>
        </div>
    );
}
