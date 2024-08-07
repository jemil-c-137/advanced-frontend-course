import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    ({ className, block }: ArticleCodeBlockProps) => (
        <div className={className}>
            <Code text={block.code} />
        </div>
    ),
);

ArticleCodeBlockComponent.displayName = 'ArticleImageBlockComponent';
