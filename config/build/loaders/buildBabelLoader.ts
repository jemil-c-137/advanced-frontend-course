import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
    return {
        test: isTsx ? /\.(js|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    ['@babel/plugin-transform-typescript',
                        { isTsx },
                    ],
                    ['@babel/plugin-transform-runtime'],
                    isDev && require.resolve('react-refresh/babel'),
                    isTsx && !isDev && [babelRemovePropsPlugin, {
                        props: ['data-testid'],
                    }],
                ].filter(Boolean),
            },
        },
    };
}
