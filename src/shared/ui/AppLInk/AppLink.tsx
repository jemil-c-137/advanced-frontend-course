import { classNames } from 'shared/lib/classNames';
import cls from './AppLink.module.scss';
import type { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, to, children, theme = AppLinkTheme.PRIMARY } = props;

  return (
    <Link className={classNames(cls.appLink, {}, [className, cls[theme]])} to={to}>
      {children}
    </Link>
  );
};
