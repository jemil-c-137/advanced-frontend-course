import { ComponentStory } from '@storybook/react';
import React from 'react';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof NotificationItem> = (args: any) => <NotificationItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    item: {
        title: 'title',
        id: '1',
        description: 'description',
    },
};
