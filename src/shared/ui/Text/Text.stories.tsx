import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Text',
    component: Text,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: any) => <Text {...args} />;

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text',
};

export const TitleAndText = Template.bind({});
TitleAndText.args = {
    title: 'Title',
    text: 'Text',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleError = Template.bind({});
OnlyTitleError.args = {
    title: 'Title',
    theme: TextTheme.ERROR,
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextError = Template.bind({});
OnlyTextError.args = {
    text: 'Text',
    theme: TextTheme.ERROR,
};

export const TitleAndTextDark = Template.bind({});
TitleAndTextDark.args = {
    title: 'Title',
    text: 'Text',
};
TitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleAndTextError = Template.bind({});
TitleAndTextError.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,
};

export const TitleAndTextL = Template.bind({});
TitleAndTextL.args = {
    title: 'Title',
    text: 'Text',
    size: TextSize.L,
};
