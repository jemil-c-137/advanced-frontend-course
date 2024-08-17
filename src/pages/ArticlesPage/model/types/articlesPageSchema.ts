import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { ArticlesSortField, ArticleType } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    page: number;
    limit?: number;
    hasMore: boolean;
    order: SortOrder;
    sort: ArticlesSortField;
    search: string;
    _inited: boolean;
    type: ArticleType;
}
