import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from '../types/config';
export function buildLoaders(option: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.css$/i,
    use: [ option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader"],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typeScriptLoader,
    cssLoader,
    scssLoader,
  ]
}