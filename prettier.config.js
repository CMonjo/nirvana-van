const styleguide = require('@vercel/style-guide/prettier');

const config = {
    bracketSpacing: true,
    jsxBracketSameLine: false,
    printWidth: 120,
    semi: false,
    singleQuote: true,
    useTabs: false,
    parser: "typescript",
    trailingComma: "none",
}


module.exports = {
    ...styleguide,
    plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
    ...config,
};