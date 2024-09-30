import React from 'react';
import { ComponentStory } from '@storybook/react';
import AboutPage from './AboutPage';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    args: {
        to: '/',
    },
};

const Template: ComponentStory<typeof AboutPage> = (args: any) => <AboutPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
