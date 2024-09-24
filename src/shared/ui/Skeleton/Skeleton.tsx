import { CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    border?: string;
    className?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        width,
        height,
        border,
        className,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div className={classNames(cls.skeleton, {}, [className])} style={styles} />
    );
};
