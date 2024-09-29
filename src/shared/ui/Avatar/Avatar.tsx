import { useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import AvatarIcon from '../../assets/icons/avatar.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

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
        <AppImage
            errorFallback={<Icon width={size} height={size} Svg={AvatarIcon} />}
            fallBack={<Skeleton width={size} height={size} border="50%" />}
            src={src}
            style={style}
            alt={alt}
            className={classNames(cls.avatar, {}, [className])} />
    );
};
