import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof Input> = (args: any) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 'Text',
    placeholder: 'add your value',
};
