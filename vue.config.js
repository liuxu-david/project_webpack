const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  outputDir: path.resolve(__dirname, "build"), // 输出目录
  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, "src/main.js"), // 入口文件路径
    },
    output: {
      filename: "[name].bundle.js", // 输出文件名
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    devtool: "source-map",
    module: {
      rules: [],
    },
    plugins: [],
  },
});
