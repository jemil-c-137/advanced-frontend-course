import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLInk/AppLink';
import { HTMLAttributeAnchorTarget } from 'react';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';

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
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar!} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.createdAt} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlocks && <ArticleTextBlockComponent block={textBlocks} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}>
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('readMore')}
                            </Button>
                        </AppLink>
                        <Text text={String(article.views)} className={cls.views} />
                        <Icon Svg={EyeIcon} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
};
