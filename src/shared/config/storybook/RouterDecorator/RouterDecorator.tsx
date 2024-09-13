import { StoryFn, ReactRenderer } from '@storybook/react';
import '@/app/styles/index.scss';
import { MemoryRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponent: StoryFn<ReactRenderer>) => {
    const Story = StoryComponent as React.FC;

    return (
        <MemoryRouter initialEntries={['/']}>
            <Story />
        </MemoryRouter>
    );
};
