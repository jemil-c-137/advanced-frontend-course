import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    comments: Comment[];
    isLoading: boolean;
}

export const CommentList = memo(({ comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap="16" max>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap="16">
            {comments.length ? comments.map((comment) => (
                <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />
            )) : <Text title={t('no comments')} /> }
        </VStack>
    );
});

CommentList.displayName = 'CommentCard';
