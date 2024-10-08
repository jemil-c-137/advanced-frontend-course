import {
    FC,
    ReactNode,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    className?: string;
    lazy?: boolean;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        children, isOpen, onClose, className, lazy,
    } = props;

    const {
        isMounted,
        isClosing,
        close,
    } = useModal({ animationDelay: 200, onClose, isOpen });

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(
                    cls.modal,
                    {
                        [cls.open]: isOpen,
                        [cls.closing]: isClosing,
                    },
                    [className],
                )}>
                <Overlay className={cls.overlay} onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
