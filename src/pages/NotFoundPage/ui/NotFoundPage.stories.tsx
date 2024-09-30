import React from 'react';
import { ComponentStory } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

// Default export for Storybook
export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        // Optional parameter to center the component in the Canvas.
        layout: 'centered',
    },
};

// Template function for the NotFoundPage
const Template: ComponentStory<typeof NotFoundPage> = (args: any) => <NotFoundPage {...args} />;

// Primary story
export const Primary = Template.bind({});
Primary.args = {};

// Dark theme story
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
