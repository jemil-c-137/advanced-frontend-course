import { classNames } from 'shared/lib/classNames/classNames';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div>
            <Button
                className={classNames(className)}
                theme={ThemeButton.CLEAR}
                onClick={toggle}
            >
                {t('language')}
            </Button>
        </div>
    );
};
