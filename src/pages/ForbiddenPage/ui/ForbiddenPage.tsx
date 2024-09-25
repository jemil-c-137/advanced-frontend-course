/* eslint-disable i18next/no-literal-string */
import { getRouteMain } from '@/shared/const/router';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = () => (
    <Page>
        <div>
            You have no access to this page
        </div>

        <AppLink theme={AppLinkTheme.SECONDARY} to={getRouteMain()}>
            go back
        </AppLink>
    </Page>
);

export default ForbiddenPage;
