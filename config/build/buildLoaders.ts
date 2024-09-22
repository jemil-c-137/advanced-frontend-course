import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(buildOptions: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(true);

    const tsxBabelLoader = buildBabelLoader({ ...buildOptions, isTsx: true });
    const codeBabelLoader = buildBabelLoader({ ...buildOptions, isTsx: false });

    return [fileLoader, svgLoader, codeBabelLoader, tsxBabelLoader, cssLoader];
}
