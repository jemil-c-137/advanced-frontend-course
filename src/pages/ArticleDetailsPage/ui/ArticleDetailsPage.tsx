import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { memo } from 'react';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleDetails } from '../../../entities/Article';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading, getArticleDetailsCommentsError } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';

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

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div>
                {t('noDataError')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={cls.articleDetailsPage}>
                <ArticleDetails id={id} />
                <Text title={t('commentsTitle')} className={cls.commentsTitle} />
                <CommentList
                    comments={comments}
                    isLoading={!!isLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
