import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupsCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropDownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {
        className,
        direction = 'bottom left',
        children,
        trigger,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames('', {}, [className, popupsCls.popup])}>
            <HPopover.Button as="div" className={popupsCls.trigger}>{trigger}</HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
