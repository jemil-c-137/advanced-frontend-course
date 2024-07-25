import { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from '../../../entities/Country';
import { Currency } from '../../../entities/Currency';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    args: {
        to: '/profile',
    },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [StoreDecorator({
        profile: {
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
            form: {
                first: 'name',
                lastname: 'lastname',
                age: 22,
                currency: Currency.EUR,
                city: 'city',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png',
                country: Country.Italy,
                username: 'username',
            },
            readonly: true,
        },
    })],
};

export const Dark: Story = {
    decorators: [StoreDecorator({
        profile: {
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
            form: {
                first: 'name',
                lastname: 'lastname',
                age: 22,
                currency: Currency.EUR,
                city: 'city',
                avatar: 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png',
                country: Country.Italy,
                username: 'username',
            },
            readonly: true,
        },
    }), ThemeDecorator(Theme.DARK)],
};