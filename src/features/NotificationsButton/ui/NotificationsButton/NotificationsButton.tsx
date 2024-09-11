import { NotificationsList } from 'entities/Notification';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import NotifyIcon from 'shared/assets/icons/notify.svg';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import cls from './NotificationsButton.module.scss';

export const NotificationsButton = memo(() => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenClick = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const onCloseClick = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const trigger = () => (
        <Button onClick={onOpenClick} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotifyIcon} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover trigger={trigger()}>
                    <NotificationsList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger()}
                <Drawer isOpen={isOpen} onClose={onCloseClick}>
                    <NotificationsList />
                </Drawer>
            </MobileView>
        </div>
    );
});

NotificationsButton.displayName = 'NotificationsButton';
