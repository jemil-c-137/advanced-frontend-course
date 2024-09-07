import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';
import { getUserAuthData } from '../../../../entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}>
            <item.Icon className={cls.icon} />
            {!collapsed && item.text}
        </AppLink>
    );
});

SidebarItem.displayName = 'SidebarItem';
