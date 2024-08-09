import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { memo, useCallback } from 'react';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { ArticleDetails } from '../../../entities/Article';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading, getArticleDetailsCommentsError } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/service/addCommentForArticle/addCommentForArticle';

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const error = useSelector(getArticleDetailsCommentsError);
    const navigate = useNavigate();

    const backToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <Page>
                {t('noDataError')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={cls.articleDetailsPage}>
                <Button theme={ButtonTheme.OUTLINE} onClick={backToList}>
                    {t('toArticlesList')}
                </Button>
                <ArticleDetails id={id} />
                <Text title={t('commentsTitle')} className={cls.commentsTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={!!isLoading} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
