import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className, to, children, theme = AppLinkTheme.PRIMARY,
    } = props;

    return (
        <Link
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            to={to}>
            {children}
        </Link>
    );
});

AppLink.displayName = 'AppLink';
