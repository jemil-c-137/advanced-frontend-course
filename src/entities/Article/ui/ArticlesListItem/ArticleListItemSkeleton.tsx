import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/constants/constants';

interface ArticleListItemSkeletonProps {
    view: ArticleView;
    className?: string;
}

export const ArticleListItemSkeleton = (
    { view, className }: ArticleListItemSkeletonProps,
) => {
    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} className={cls.views} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={160} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
};
