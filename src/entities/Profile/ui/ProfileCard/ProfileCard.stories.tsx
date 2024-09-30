import React from 'react';
import { ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

// Default export for Storybook
export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        // Optional parameter to center the component in the Canvas.
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof ProfileCard> = (args: any) => <ProfileCard {...args} />;

// Primary story
export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'name',
        lastname: 'lastname',
        age: 22,
        currency: Currency.EUR,
        city: 'city',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png',
        country: Country.Italy,
        username: 'username',
    },
};

// IsLoading story
export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};

// Error story
export const Error = Template.bind({});
Error.args = {
    error: 'error',
};
