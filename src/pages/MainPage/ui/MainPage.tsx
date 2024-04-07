import { Counter } from 'enteties/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div>{t('main page')}</div>
            <Counter />
        </div>
    );
};

export default MainPage;
