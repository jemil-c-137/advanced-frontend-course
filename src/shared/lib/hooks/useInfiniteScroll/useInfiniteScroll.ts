import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
    useEffect(() => {
        let observer: null | IntersectionObserver = null;
        const triggerEl = triggerRef.current;
        const wrapperEl = wrapperRef.current;

        if (callback) {
            const options = {
                root: wrapperEl,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerEl);
        }

        return () => {
            if (observer) {
                observer.unobserve(triggerEl);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
