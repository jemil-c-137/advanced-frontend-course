import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

function getApiUrl(mode: BuildMode, apiUrl?: string) {
    if (apiUrl) return apiUrl;

    if (mode === 'production') {
        return '/api';
    }

    return 'http://localhost:8000';
}

export default (env: BuildEnv) => {
    const buildPaths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
    };

    const MODE: BuildMode = env?.mode || 'development';
    const isDev = MODE === 'development';
    const PORT = env?.port || 3000;
    const apiUrl = getApiUrl(MODE, env?.apiUrl);

    const config: webpack.Configuration = buildWebpackConfig({
        mode: MODE,
        paths: buildPaths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });

    return config;
};
