import { ComponentStory } from '@storybook/react';
import React from 'react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

// Default export for Storybook
export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    parameters: {
        // Optional parameter to center the component in the Canvas.
        layout: 'centered',
    },
};

// Template function for ArticleRecommendationsList
const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

// Primary story
export const Primary = Template.bind({});
Primary.args = {};
