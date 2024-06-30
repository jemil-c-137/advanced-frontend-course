import {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import type React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    value: string | number;
    onChange?: (value: string) => void;
    className?: string;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        type = 'text',
        className,
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus && ref.current) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autofocus]);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
            setCaretPosition(e.target.value.length);
        }
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e.target.selectionStart);
    };

    return (
        <div className={cls.inputWrapper}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={changeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    className={classNames(cls.input, { [cls.readonly]: readonly }, [className])}
                    readOnly={readonly}
                    {...otherProps} />
                {isFocused && !readonly && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }} />
                )}
            </div>
        </div>
    );
});

Input.displayName = 'Input';
