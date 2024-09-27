import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MyLink.module.scss';

export enum MyLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface MyLinkProps extends LinkProps {
    className?: string;
    theme?: MyLinkTheme;
}

export const MyLink = memo((props: MyLinkProps) => {
    const {
        className, to, children, theme = MyLinkTheme.PRIMARY,
    } = props;

    return (
        <Link
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            to={to}>
            {children}
        </Link>
    );
});

MyLink.displayName = 'MyLink';
