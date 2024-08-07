import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    config.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'));
    config.resolve?.extensions?.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module!.rules = config.module?.rules?.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }
        return rule;
    });

    config.module?.rules?.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));
    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify('true'),
            __API__: JSON.stringify('api'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );
    return config;
};
