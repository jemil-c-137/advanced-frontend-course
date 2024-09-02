import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { ArticlesList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import {
    useGetArticlesRecommendationsListQuery,
} from 'features/ArticleRecommendationsList/api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { data: articles, isLoading, error } = useGetArticlesRecommendationsListQuery(4);

    if (isLoading || error) {
        return null;
    }

    console.log('data', articles);

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('recommendationsTitle')} />
            <ArticlesList
                // eslint-disable-next-line i18next/no-literal-string
                target="_blank"
                articles={articles}
                isLoading={isLoading} />
        </VStack>
    );
});

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
