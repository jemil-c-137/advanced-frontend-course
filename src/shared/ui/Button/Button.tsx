import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.BACKGROUND,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(
                cls.button,
                {
                    [cls.square]: square,
                    [cls.disabled]: disabled,
                },
                [cls[theme], cls[size], className],
            )}
            {...otherProps}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';
