import { PropsWithChildren, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string;
}

export function Navbar(props: PropsWithChildren<NavbarProps>) {
    const { className } = props;
    const { t } = useTranslation();

    const [isAuthMode, setIsAuthMode] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthMode((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}>
                {t('login')}
            </Button>

            <Modal isOpen={isAuthMode} onClose={onToggleModal}>
                some text goes here
            </Modal>
        </div>
    );
}
