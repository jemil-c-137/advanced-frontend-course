import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof Avatar> = (args: any) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    // eslint-disable-next-line max-len
    src: 'https://s3-eu-central-1.amazonaws.com/vodafone-featured/wp-content/uploads/2023/11/29161916/avatar-all-about-artikelbild-640x360.jpg',
};
