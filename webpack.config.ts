import path from 'path';
import webpack from 'webpack';
import { buildWEbpackConfiguration } from './config/build/buildWebpackConfiguration';
import { BuildPaths } from './config/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWEbpackConfiguration( {
  mode,
  paths,
  isDev,
});

export default config;