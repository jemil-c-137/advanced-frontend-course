import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

import { ProfileCard } from './ProfileCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
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
    },
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const Error: Story = {
    args: {
        error: 'error',
    },
};
