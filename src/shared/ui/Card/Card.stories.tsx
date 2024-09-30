/* eslint-disable i18next/no-literal-string */
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof Card> = (args: any) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <div>Text</div>,
};
