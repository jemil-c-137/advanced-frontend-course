import {
    MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSavedScrollPath, scrollSaveActions } from '@/features/ScrollSave';
import { StateSchema } from '@/app/providers/StoreProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { TestsProps } from '@/shared/types/tests';

interface PageProps extends TestsProps {
    className?: string;
    children?: ReactNode;
    onScrollBottom?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollBottom } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getSavedScrollPath(state, pathname));

    const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition(
            {
                position: event.currentTarget.scrollTop,
                path: pathname,
            },
        ));
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    useInfiniteScroll({ callback: onScrollBottom, wrapperRef, triggerRef });

    return (
        <section
            // eslint-disable-next-line react/destructuring-assignment
            data-testid={props['data-testid'] ?? ''}
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            onScroll={onScroll}>
            {children}
            {onScrollBottom && <div className={cls.trigger} ref={triggerRef} />}
        </section>
    );
};
