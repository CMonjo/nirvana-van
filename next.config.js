const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [640, 768, 1024, 1280, 1600, 1920], // évite les w=3840 si non nécessaire
        imageSizes: [16, 32, 48, 64, 96],
        formats: ['image/webp'],
    },
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
