import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div>{t('main page')}</div>
        </div>
    );
};

export default MainPage;
