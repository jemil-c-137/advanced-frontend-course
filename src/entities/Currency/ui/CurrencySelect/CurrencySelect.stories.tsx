import { ComponentStory } from '@storybook/react';
import React from 'react';
import { CurrencySelect } from './CurrencySelect';

// Default export for Storybook
export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        // Optional parameter to center the component in the Canvas.
        layout: 'centered',
    },
};

// Template function for CurrencySelect
const Template: ComponentStory<typeof CurrencySelect> = (args: any) => <CurrencySelect {...args} />;

// Primary story
export const Primary = Template.bind({});
Primary.args = {
    value: '1',
    onChange: () => {},
};
