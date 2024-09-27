import { Meta, StoryObj } from '@storybook/react';
import { MyLink, MyLinkTheme } from './MyLink';

const meta = {
    title: 'shared/MyLink',
    component: MyLink,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    args: {
        to: '/',
    },
} satisfies Meta<typeof MyLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: MyLinkTheme.PRIMARY,
    },
};
export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: MyLinkTheme.SECONDARY,
    },
};
