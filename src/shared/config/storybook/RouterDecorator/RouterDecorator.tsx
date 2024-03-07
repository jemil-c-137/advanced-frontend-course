import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { MemoryRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => StoryFn) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
);
