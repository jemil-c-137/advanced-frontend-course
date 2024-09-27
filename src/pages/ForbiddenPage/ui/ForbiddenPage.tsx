/* eslint-disable i18next/no-literal-string */
import { getRouteMain } from '@/shared/const/router';
import { MyLink, MyLinkTheme } from '@/shared/ui/MyLink';
import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = () => (
    <Page>
        <div>
            You have no access to this page
        </div>

        <MyLink theme={MyLinkTheme.SECONDARY} to={getRouteMain()}>
            go back
        </MyLink>
    </Page>
);

export default ForbiddenPage;
