import {
    memo, ReactNode, useCallback, useEffect,
} from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider/AnimationProvder';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

const height = window.innerHeight - 100;

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}
export const DrawerContent = memo((props: DrawerProps) => {
    const { Gesture, Spring } = useAnimationLibs();
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
    const theme = useTheme();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    const {
        isMounted,
        isClosing,
    } = useModal({ animationDelay: 200, onClose, isOpen });

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [isOpen, openDrawer, api]);

    const close = (velocity = 0) => {
        api.start({
            y: height, immediate: false, config: { ...Spring.config.stiff, velocity }, onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        (bind) => {
            const {
                last,
                velocity: [, vy],
                direction: [, dy],
                movement: [, my],
                cancel,
            } = bind;

            if (my < 70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    const mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, [className, 'app_drawer'])}>
                <Overlay onClick={close} />
                <Spring.a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}>
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

DrawerContent.displayName = 'Drawer';

export const Drawer = memo((props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
});

Drawer.displayName = 'Drawer';
