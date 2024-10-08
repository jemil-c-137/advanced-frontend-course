import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { MyLink } from '@/shared/ui/MyLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';

import {
    ArticleBlockType, ArticleView,
} from '../../model/constants/constants';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    article: Article;
    view: ArticleView;
    className?: string;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (
    {
        article,
        view,
        className,
        target,
    }: ArticleListItemProps,
) => {
    const { t } = useTranslation();

    if (view === ArticleView.LIST) {
        const textBlocks = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div data-testid="ArticleListItem" className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar!} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.createdAt} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <AppImage
                        fallBack={<Skeleton width={30} height={30} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.img} />
                    {textBlocks && <ArticleTextBlockComponent block={textBlocks} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <MyLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}>
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('readMore')}
                            </Button>
                        </MyLink>
                        <Text text={String(article.views)} className={cls.views} />
                        <Icon Svg={EyeIcon} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <MyLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallBack={<Skeleton width={30} height={30} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </MyLink>
    );
};
