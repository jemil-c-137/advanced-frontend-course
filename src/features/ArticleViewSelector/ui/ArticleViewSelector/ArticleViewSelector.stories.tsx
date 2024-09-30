import React from 'react';
import { ArticlesViewSelector } from './ArticleViewSelector';

export default {
    title: 'features/ArticleViewSelector',
    component: ArticlesViewSelector,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

const Template = (args: any) => <ArticlesViewSelector {...args} />;

export const Primary = Template.bind({});
