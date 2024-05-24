import { FC, lazy } from 'react';

export const LoginFormAsync = lazy<FC>(
    () =>
        new Promise((resolve) => {
            setTimeout(() => resolve(import('./LoginForm')), 1500);
        })
);
