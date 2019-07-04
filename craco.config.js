const { addAfterLoader, loaderByName } = require("@craco/craco");



const webpackPlug = {
    overrideWebpackConfig: ({ webpackConfig }) => {

        addAfterLoader(webpackConfig, loaderByName("babel-loader"), {
            test: /\.(graphql|graphqls|gql)$/,
            exclude: /node_modules/,
            loader: require.resolve('graphql-tag/loader'),
        });

        return webpackConfig;
    }
}



module.exports = function ({env}) {
    return {
        plugins: [
            { plugin: webpackPlug }
        ]

    };
}