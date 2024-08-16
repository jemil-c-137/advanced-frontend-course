import {
    ChangeEvent, useCallback, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
    value: T;
    content: string
}

interface SelectProps<T extends string> {
    label?: string
    options: SelectOptions<T>[];
    value: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
    className?: string;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        label, value, onChange, options, readonly, className,
    } = props;
    const optionList = useMemo(() => options.map((option) => (
        <option
            value={option.value}
            className={cls.className}
            key={option.value}>
            {option.content}
        </option>
    )), [options]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    }, [onChange]);

    return (
        <div className={cls.wrapper}>
            {label && (
                <span className={cls.label}>{label}</span>
            )}
            <select
                className={classNames(cls.select, {}, [className])}
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}>
                {optionList}
            </select>
        </div>
    );
};
