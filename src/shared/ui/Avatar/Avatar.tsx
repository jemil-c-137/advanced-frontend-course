import { useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src: string;
    alt?: string;
    size?: number;
}

export const Avatar = ({ src, alt = '', size }: AvatarProps) => {
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
        <img src={src} style={style} alt={alt} className={cls.avatar} />
    );
};
