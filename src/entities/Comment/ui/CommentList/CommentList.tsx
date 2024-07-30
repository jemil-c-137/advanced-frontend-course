import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    comments: Comment[];
    isLoading: boolean;
}

export const CommentList = memo(({ comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    return (
        <div>
            {comments.length ? comments.map((comment) => (
                <CommentCard isLoading={isLoading} className={cls.comment} key={comment.id} comment={comment} />
            )) : <Text title={t('no comments')} /> }
        </div>
    );
});

CommentList.displayName = 'CommentCard';
