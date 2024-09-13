import { useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src: string;
    alt?: string;
    size?: number;
    className?: string;
}

export const Avatar = ({
    src, alt = '', size, className,
}: AvatarProps) => {
    const style = useMemo(() => {
        if (size) {
            return {
                width: size,
                height: size,
            };
        }
        return undefined;
    }, [size]);

    return (
        <img src={src} style={style} alt={alt} className={classNames(cls.avatar, {}, [className])} />
    );
};
