import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = memo((props: CardProps) => {
    const {
        children,
        className,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
            className={classNames(
                cls.card,
                {
                    [cls.max]: max,
                },
                [className, cls[theme]],
            )}>
            {children}
        </div>
    );
});

Card.displayName = 'Card';
