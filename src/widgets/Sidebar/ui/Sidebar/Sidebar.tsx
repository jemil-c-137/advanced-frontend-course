import { classNames } from 'shared/lib/classNames/classNames';
import { useState, type FC } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLInk/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = async () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed })}>
            <Button
                data-testid="sidebar-toggle"
                type="button"
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
                onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                        className={cls.link}>
                        <HomeIcon className={cls.icon} />
                        {!collapsed && t('main page')}
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.link}
                        to={RoutePath.about}>
                        <AboutIcon className={cls.icon} />
                        {!collapsed && t('about site')}
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
