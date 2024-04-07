import { PropsWithChildren, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar(props: PropsWithChildren<NavbarProps>) {
    const { className } = props;
    const { t } = useTranslation();

    const [isAuthMode, setIsAuthMode] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthMode(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthMode(true);
    }, []);

    return (
        <div className={classNames(cls.navbar)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onOpenModal}>
                {t('login')}
            </Button>

            <LoginModal isOpen={isAuthMode} onClose={onCloseModal} />
        </div>
    );
}
