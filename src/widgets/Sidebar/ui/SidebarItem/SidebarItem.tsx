import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/item';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => (
    <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(cls.link, { [cls.collapsed]: collapsed })}>
        <item.Icon className={cls.icon} />
        {!collapsed && item.text}
    </AppLink>
));

SidebarItem.displayName = 'SidebarItem';
