import { memo } from 'react';
import { ArticleImageBlock } from '@/entities/Article/model/types/article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockProps) => (
        <div className={classNames(cls.articleBlockImage, {}, [className])}>
            <img src={block.src} alt={block.title} />
            {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
        </div>
    ),
);

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
