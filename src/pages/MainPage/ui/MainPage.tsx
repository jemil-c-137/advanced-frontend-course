import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <div>{t('main page')}</div>
            <Counter />
        </Page>
    );
};

export default MainPage;
