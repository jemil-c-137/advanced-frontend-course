import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <div>{t('main page')}</div>
            <StarRating size={50} />
        </Page>
    );
};

export default MainPage;
