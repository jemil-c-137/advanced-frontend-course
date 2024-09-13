import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    className?: string;
    inverted?: boolean;
}

export const Icon = ({ Svg, className, inverted }: IconProps) => (
    <Svg className={classNames(cls.icon, { [cls.inverted]: inverted }, [className])} />
);
