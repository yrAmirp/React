import webpack from 'webpack';
export function buildLoaders(): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
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