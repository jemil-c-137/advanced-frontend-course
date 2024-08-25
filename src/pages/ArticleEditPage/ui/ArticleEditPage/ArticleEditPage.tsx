import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';

const ArticleEditPage = memo(() => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page>
            {isEdit ? t('editArticle') : t('createNewArticle')}
        </Page>
    );
});

ArticleEditPage.displayName = 'ArticleEditPage';

export default ArticleEditPage;
