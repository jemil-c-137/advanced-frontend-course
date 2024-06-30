import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string;
    content: string
}

interface SelectProps {
    label?: string
    options: SelectOptions[];
    value: string;
    onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const {
        label, value, onChange, options,
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
            onChange(e.target.value);
        }
    }, [onChange]);

    return (
        <div className={cls.wrapper}>
            {label && (
                <span className={cls.label}>{label}</span>
            )}
            <select className={cls.select} value={value} onChange={onChangeHandler} name="" id="">
                {optionList}
            </select>
        </div>
    );
});

Select.displayName = 'Select';
