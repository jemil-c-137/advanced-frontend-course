import { NotificationsList } from 'entities/Notification';
import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import NotifyIcon from 'shared/assets/icons/notify.svg';
import cls from './NotificationsButton.module.scss';

export const NotificationsButton = memo(() => (
    <Popover trigger={(
        <Button theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotifyIcon} inverted />
        </Button>
    )}>
        <NotificationsList className={cls.notifications} />
    </Popover>
));

NotificationsButton.displayName = 'NotificationsButton';
