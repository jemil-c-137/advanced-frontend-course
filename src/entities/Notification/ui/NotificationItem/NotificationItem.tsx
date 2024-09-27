import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { MyLink } from '@/shared/ui/MyLink';

interface NotificationProps {
    className?: string;
    item: Notification
}

export const NotificationItem = memo((props: NotificationProps) => {
    const { className, item } = props;
    const { t } = useTranslation();

    const content = (
        <Card theme={CardTheme.OUTLINE} className={classNames(cls.notificationItem, {}, [className])}>
            {item.description}
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <MyLink to={item.href}>
                {content}
            </MyLink>
        );
    }

    return content;
});

NotificationItem.displayName = 'NotificationItem';
