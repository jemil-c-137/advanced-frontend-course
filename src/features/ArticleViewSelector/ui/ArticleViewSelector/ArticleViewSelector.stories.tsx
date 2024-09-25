import { Meta, StoryObj } from '@storybook/react';
import { ArticlesViewSelector } from './ArticleViewSelector';

const meta = {
    title: 'features/ArticleViewSelector',
    component: ArticlesViewSelector,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof ArticlesViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
