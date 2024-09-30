import React from 'react';
import { ComponentStory } from '@storybook/react';
import { ArticlesSortField } from '@/entities/Article';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
    title: 'features/ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

const Template: ComponentStory<typeof ArticleSortSelector> = (args: any) => <ArticleSortSelector {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    order: 'asc',
    sort: ArticlesSortField.CREATED,
};
