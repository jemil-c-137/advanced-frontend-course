import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponent: StoryFn) => {
    const Story = StoryComponent as React.FC;

    return (
        <Suspense fallback={<div>...</div>}>
            <Story />
        </Suspense>
    );
};
