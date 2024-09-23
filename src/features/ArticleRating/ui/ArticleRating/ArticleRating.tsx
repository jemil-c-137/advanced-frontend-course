import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useGetArticleRating, useRateArticle } from '@/features/ArticleRating/api/articleRatingApi';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
    const { articleId, className } = props;
    const userData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const { data, isLoading } = useGetArticleRating({ articleId, userId: userData!.id });
    const [rateArticleMutation] = useRateArticle();

    const rateHandleArticle = useCallback((starCount: number, feedback?: string) => {
        rateArticleMutation({
            userId: userData!.id,
            articleId,
            rate: starCount,
            feedback,
        });
    }, [articleId, rateArticleMutation, userData]);

    const onCancel = useCallback((starsCount: number) => {
        rateHandleArticle(starsCount);
    }, [rateHandleArticle]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        rateHandleArticle(starsCount, feedback);
    }, [rateHandleArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height="120" />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            title={t('rateArticle')}
            hasFeedback
            feedbackTitle={t('leaveFeedbackArticle')} />
    );
};

export default ArticleRating;
