import webpack from 'webpack';
import path from "path";
import { buildWebpackConfiguration } from './config/build/buildWebpackConfiguration';
import { BuildEnv, BuildPaths } from './config/types/config';



export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfiguration({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config;
};
