import { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta = {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        item: {
            title: 'title',
            id: '1',
            description: 'description',
        },
    },
};
