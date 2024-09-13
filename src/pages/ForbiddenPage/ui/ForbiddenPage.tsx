/* eslint-disable i18next/no-literal-string */
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLInk/AppLink';
import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = () => (
    <Page>
        <div>
            You have no access to this page
        </div>

        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
            go back
        </AppLink>
    </Page>
);

export default ForbiddenPage;
