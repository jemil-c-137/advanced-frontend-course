/* eslint-disable react/display-name */
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <div className={`${theme}`}>
        <Story />
    </div>
);
