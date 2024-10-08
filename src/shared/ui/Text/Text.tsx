import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo(
    ({
        text,
        title,
        className,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    }: TextProps) => {
        const HeaderTag = mapSizeHeaderTag[size];

        return (
            <div
                className={classNames('', {}, [
                    className,
                    cls[theme],
                    cls[align],
                    cls[size],
                ])}>
                {title && (
                    <HeaderTag
                        data-testid={`${dataTestId}.Header`}
                        className={cls.title}>
                        {title}
                    </HeaderTag>
                )}
                {text && (
                    <p data-testid={`${dataTestId}.Text`} className={cls.text}>
                        {text}
                    </p>
                )}
            </div>
        );
    },
);

Text.displayName = 'Text';
