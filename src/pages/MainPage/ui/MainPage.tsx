import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <div>{t('main page')}</div>
            <RatingCard title="your feedback" hasFeedback={true} feedbackTitle="give us feedback" />
        </Page>
    );
};

export default MainPage;
