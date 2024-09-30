import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: any) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'label',
    options: [
        { value: '1', content: '1' },
        { value: '2', content: '2' },
    ],
    value: '1',
};
