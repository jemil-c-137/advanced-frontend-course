import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockProps {
    block: ArticleTextBlock;
    className?: string;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockProps) => (
    <div className={classNames(cls.articleTextBlock, {}, [className])}>
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Text key={index} text={paragraph} className={cls.paragraph} />
        ))}
    </div>
));

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
