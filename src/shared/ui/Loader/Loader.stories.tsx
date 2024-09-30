import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Loader } from './Loader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    args: {
        to: '/',
    },
};

const Template: ComponentStory<typeof Loader> = (args: any) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    to: '/',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
