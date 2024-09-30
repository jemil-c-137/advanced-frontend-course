import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: any) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'content of tab 1',
        },
        {
            value: 'tab 2',
            content: 'content of tab 2',
        },
        {
            value: 'tab 3',
            content: 'content of tab 3',
        },
        {
            value: 'tab 4',
            content: 'content of tab 4',
        },
    ],
    value: 'tab 1',
};
