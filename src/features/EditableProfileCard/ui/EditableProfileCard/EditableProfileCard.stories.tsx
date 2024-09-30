import { ComponentStory } from '@storybook/react';
import React from 'react';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof EditableProfileCard> = (args: any) => <EditableProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id: '1',
};
