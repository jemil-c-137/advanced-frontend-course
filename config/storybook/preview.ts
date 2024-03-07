import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

const preview: Preview = {
    decorators: [(Story) => Story(StyleDecorator), withRouter],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
