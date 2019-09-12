const { override, addBabelPlugin, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addBabelPlugin([
        "babel-plugin-root-import",
        {
            rootPathSuffix: "src",

        }
    ])
);