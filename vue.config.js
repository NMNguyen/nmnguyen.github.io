const path = require('path');

module.exports = {
    pwa: {
        name: 'AppCloudjetWork',
    },

    publicPath: undefined,
    outputDir: "dist",
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: false,
    parallel: undefined,

    css: {
        sourceMap: (process.env.NODE_ENV !== "production")
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                styles: path.resolve(__dirname, "src/assets/styles"),
            }
        }
    },
};
