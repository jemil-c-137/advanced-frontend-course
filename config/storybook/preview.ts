import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
    decorators: [(Story) => Story(StyleDecorator), withRouter, SuspenseDecorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: Theme.LIGHT, color: '#fff' },
                { name: 'dark', class: Theme.DARK, color: '#000' },
                { name: 'orange', class: Theme.ORANGE, color: '#ffb005' },
            ],
        },
    },
};

export default preview;
