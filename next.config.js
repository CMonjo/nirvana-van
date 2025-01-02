const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:locale/api/:path*',
                destination: '/api/:path*',
            },
            {
                source: '/:locale/:path*.pdf',
                destination: '/:path*.pdf',
            },
        ];
    },
};

module.exports = withNextIntl(nextConfig);
