import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[]
    className?: string;
    value: string;
    onTabClick: (tabItem: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const {
        tabs,
        value,
        onTabClick,
        className,
    } = props;

    const clickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {
                tabs.map((tab) => (
                    <Card
                        theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                        className={cls.tab}
                        onClick={clickHandler(tab)}
                        key={tab.value}>
                        {tab.content}
                    </Card>
                ))
            }
        </div>
    );
});

Tabs.displayName = 'Tabs';
