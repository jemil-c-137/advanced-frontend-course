import { classNames } from 'shared/lib/classNames/classNames';
import type { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className, to, children, theme = AppLinkTheme.PRIMARY,
    } = props;

    return (
        <Link
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            to={to}
        >
            {children}
        </Link>
    );
};
