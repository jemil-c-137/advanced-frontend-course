import { StoryFn, ReactRenderer } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponent: StoryFn<ReactRenderer>) => {
    const Story = StoryComponent as React.FC;

    return (
        <Suspense fallback={<div>...</div>}>
            <Story />
        </Suspense>
    );
};
