import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';
import { MyLink } from '@/shared/ui/MyLink';

interface CommentCardProps {
    comment?: Comment;
    className?: string;
    isLoading: boolean;
}

export const CommentCard = memo(
    ({ comment, className, isLoading }: CommentCardProps) => {
        if (isLoading || !comment) {
            return (
                <VStack
                    data-testid="CommentCard.Loading"
                    gap="8"
                    max
                    className={classNames(cls.commentCard, {}, [className, cls.loading])}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" className={cls.avatar} />
                        <Skeleton width={100} height={16} className={cls.username} />
                    </div>
                    <Skeleton className={cls.text} width="100%" height={50} />
                </VStack>
            );
        }

        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.commentCard, {}, [className])}>
                <MyLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                    {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                    <Text className={cls.username} title={comment.user.username} />
                </MyLink>
                <Text data-testid="CommentCard.Content" className={cls.text} text={comment.text} />
            </VStack>
        );
    },
);

CommentCard.displayName = 'CommentCard';
