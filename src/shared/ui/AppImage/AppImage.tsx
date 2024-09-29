import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallBack?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        alt = 'image',
        errorFallback,
        fallBack,
        src,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallBack) {
        return fallBack;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img alt={alt} src={src} className={className} {...otherProps} />
    );
});

AppImage.displayName = 'AppImage';
