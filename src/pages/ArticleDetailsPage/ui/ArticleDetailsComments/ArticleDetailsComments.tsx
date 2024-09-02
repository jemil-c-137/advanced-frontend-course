import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/comments';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/service/addCommentForArticle/addCommentForArticle';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { TextSize, Text } from 'shared/ui/Text/Text';
import cls from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
    articleId: string;
}

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
    const { articleId } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const error = useSelector(getArticleDetailsCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <VStack gap="8">
            <Text size={TextSize.L} title={t('commentsTitle')} className={cls.commentsTitle} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                comments={comments}
                isLoading={!!commentsIsLoading} />
        </VStack>
    );
};