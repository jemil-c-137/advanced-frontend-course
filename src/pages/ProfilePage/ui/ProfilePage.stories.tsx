import React from 'react';
import { ComponentStory } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from '../../../entities/Country';
import { Currency } from '../../../entities/Currency';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof ProfilePage> = (args: any) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({
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
})];

export const Dark = Template.bind({});
Dark.decorators = [
    StoreDecorator({
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
    }),
    ThemeDecorator(Theme.DARK),
];
