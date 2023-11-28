import cls from './Navbar.module.scss';
import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';

interface NavbarProps {
  className?: string;
}

export function Navbar(props: PropsWithChildren<NavbarProps>) {
  const { className } = props;

  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          About
        </AppLink>
      </div>
    </div>
  );
}
