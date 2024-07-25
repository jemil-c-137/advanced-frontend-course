import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>,
}

export function componentRender(
    component: ReactNode,
    options: componentRenderOptions = {},
) {
    return render(
        <MemoryRouter initialEntries={[options.route]}>
            <StoreProvider initialState={options.initialState}>
                <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
