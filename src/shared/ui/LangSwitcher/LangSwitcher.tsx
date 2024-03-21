import { classNames } from 'shared/lib/classNames/classNames';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div>
            <Button
                className={classNames(className)}
                theme={ButtonTheme.CLEAR}
                onClick={toggle}>
                {t(short ? 'shortLanguage' : 'language')}
            </Button>
        </div>
    );
};
