import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SortOrder } from '@/shared/types';
import { Select, SelectOptions } from '@/shared/ui/Select';
import { ArticlesSortField } from '../../model/constants/constants';

interface ArticleSortSelectorProps {
    sort: ArticlesSortField;
    order: SortOrder;
    onChangeOrder: (newVale: SortOrder) => void;
    onChangeSort: (newValue: ArticlesSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('increasing'),
        },
        {
            value: 'desc',
            content: t('decreasing'),
        },
    ], [t]);
    const sortFieldOptions = useMemo<SelectOptions<ArticlesSortField>[]>(() => [
        {
            value: ArticlesSortField.CREATED,
            content: t('creationDate'),
        },
        {
            value: ArticlesSortField.TITLE,
            content: t('byTitle'),
        },
        {
            value: ArticlesSortField.VIEWS,
            content: t('byViews'),
        },
    ], [t]);

    return (
        <>
            <Select<ArticlesSortField>
                value={sort}
                options={sortFieldOptions}
                onChange={onChangeSort}
                label={t('sortBy')} />
            <Select<SortOrder>
                value={order}
                options={orderOptions}
                onChange={onChangeOrder}
                label={t('orderBy')} />
        </>
    );
};
