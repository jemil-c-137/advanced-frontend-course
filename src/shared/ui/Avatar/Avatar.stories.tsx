import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        // eslint-disable-next-line max-len
        src: 'https://s3-eu-central-1.amazonaws.com/vodafone-featured/wp-content/uploads/2023/11/29161916/avatar-all-about-artikelbild-640x360.jpg',
    },
};
