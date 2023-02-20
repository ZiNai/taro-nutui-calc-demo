module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/i,
        use: [
          {
            loader: "sass-loader",
            options: {
              // 注意：在 sass-loader 不同版本，这个选项名是 是不一样的，具体可参考 sass-loader对应的版本文档
              data: `@import "./assets/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";`,
            },
          },
        ],
      },
    ],
  },
};
