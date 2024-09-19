import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '../Icon/Icon';
import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        size = 30,
        selectedStars = 0,
        onSelect,
    } = props;

    const [isHovered, setIsHovered] = useState(false);
    const [currentStarCount, setCurrentStarCount] = useState(0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(selectedStars || 0);
        }
    };

    return (
        <div className={classNames('', {}, [className])}>
            {stars.map((star) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        { [cls.hovered]: isHovered },
                    )}
                    Svg={StarIcon}
                    key={star} />
            ))}
        </div>
    );
});

StarRating.displayName = 'StarRating';
