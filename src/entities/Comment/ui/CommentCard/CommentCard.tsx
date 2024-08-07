import { memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLInk/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    comment?: Comment;
    className?: string;
    isLoading: boolean;
}

export const CommentCard = memo(
    ({ comment, className, isLoading }: CommentCardProps) => {
        if (isLoading || !comment) {
            return (
                <div className={classNames(cls.commentCard, {}, [className, cls.loading])}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" className={cls.avatar} />
                        <Skeleton width={100} height={16} className={cls.username} />
                    </div>
                    <Skeleton className={cls.text} width="100%" height={50} />
                </div>
            );
        }

        return (
            <div className={classNames(cls.commentCard, {}, [className])}>
                <AppLink to={RoutePath.profile + comment.user.id} className={cls.header}>
                    {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                    <Text className={cls.username} title={comment.user.username} />
                </AppLink>
                <Text className={cls.text} text={comment.text} />
            </div>
        );
    },
);

CommentCard.displayName = 'CommentCard';
