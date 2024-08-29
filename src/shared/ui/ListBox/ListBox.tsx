import {
    Listbox as HListbox,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { DropDownDirection } from '../../types/ui';
import cls from './ListBox.module.scss';

interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[]
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
    label?: string;

}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    return (
        <HListbox
            disabled={readonly}
            as="div"
            value={value}
            className={classNames(cls.listBox, {}, [className])}
            onChange={onChange}>
            <HListbox.Button as="div" className={cls.trigger}>
                {label && <span className={cls.label}>{label}</span>}
                <Button disabled={readonly}>
                    {value ?? defaultValue}
                </Button>
            </HListbox.Button>
            <HListbox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
                {items && items.map((item) => (
                    <HListbox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}>
                        {({ active, selected }) => (
                            <li className={
                                classNames(cls.option, {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled,
                                })
                            }>
                                {selected && '-'}
                                {item.content}
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
}
