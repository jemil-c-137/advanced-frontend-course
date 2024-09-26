
## Project Launch

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - launch the server + frontend project in dev mode
```

----

## Scripts

- `npm run start` - Launch the frontend project on webpack dev server
- `npm run start:vite` - Launch the frontend project on vite
- `npm run start:dev` - Launch the frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Launch the frontend project on vite + backend
- `npm run start:dev:server` - Launch the backend server
- `npm run build:prod` - Build the project in prod mode
- `npm run build:dev` - Build the project in dev mode (non-minimized)
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss files with style linter
- `npm run lint:scss:fix` - Fix scss files with style linter
- `npm run test:unit` - Run unit tests with jest
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Approve new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run test:ui:json` - Generate json report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - Launch Storybook
- `npm run storybook:build` - Build Storybook
- `npm run prepare` - Pre-commit hooks
- `npm run generate:slice` - Script for generating FSD slices

----

## Project Architecture

The project follows the Feature Sliced Design methodology.

Documentation link - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with Translations

The project uses the i18next library for handling translations.
Translation files are stored in public/locales.

For better workflow, we recommend installing a plugin for WebStorm/VSCode.

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project includes 4 types of tests:
1) Standard unit tests with jest - `npm run test:unit`
2) Component tests with React Testing Library - `npm run test:unit`
3) Screenshot testing with loki `npm run test:ui`

More about tests - [Testing Documentation](/docs/tests.md)

----

## Linting

The project uses eslint for checking TypeScript code and stylelint for checking styles.

Additionally, to enforce key architectural principles, a custom eslint plugin is used: *eslint-plugin-ulbi-tv-plugin*, which contains 3 rules:
1) path-checker - prevents using absolute imports within a single module
2) layer-imports - ensures correct layer usage according to FSD
   (for example, widgets can't be used in features or entities)
3) public-api-imports - allows imports from other modules only via public API. It has an auto-fix option.

##### Running Linters
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss files with style linter
- `npm run lint:scss:fix` - Fix scss files with style linter

----

## Storybook

Many component in the project has story cases.
Server requests are mocked using storybook-addon-mock.

The story files are created next to the component with the `.stories.tsx` extension.

To launch Storybook, run:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

----

## Project Configuration

The project contains two configurations for development:
1. Webpack - ./config/build
2. Vite - vite.config.ts

Both bundlers are adapted for the main features of the application.

All configurations are stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - Storybook configuration

The `scripts` folder contains various scripts for refactoring, code simplification, and report generation.

----

## CI Pipeline and Pre-commit Hooks

The configuration for GitHub Actions is located in /.github/workflows.
In CI, all tests are run, the project and Storybook are built, and linting is done.

Pre-commit hooks check the project with linters. The configuration is in /.husky.

----

### Data Handling

Data interaction is handled with Redux Toolkit.
Where possible, reusable entities should be normalized using EntityAdapter.

Server requests are made using [RTK Query](/src/shared/api/rtkApi.ts).

For asynchronously connecting reducers (to avoid loading them into the global bundle), the
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

----

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
