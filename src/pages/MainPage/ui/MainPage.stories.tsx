import React from 'react';
import { ComponentStory } from '@storybook/react';
import MainPage from './MainPage';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    args: {
        to: '/',
    },
};

const Template: ComponentStory<typeof MainPage> = (args: any) => <MainPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    to: '/',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
