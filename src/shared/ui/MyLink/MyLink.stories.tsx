import { ComponentStory } from '@storybook/react';
import { MyLink, MyLinkTheme } from './MyLink';

export default {
    title: 'shared/MyLink',
    component: MyLink,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        to: '/',
    },
};

const Template: ComponentStory<typeof MyLink> = (args: any) => <MyLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: MyLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: MyLinkTheme.SECONDARY,
};
