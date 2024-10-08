import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            <div>{t('main page')}</div>
        </Page>
    );
};

export default MainPage;
