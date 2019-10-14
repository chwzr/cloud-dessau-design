const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')

const nextConfig = withSass({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest),
  generateInDevMode: false,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'https-calls',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 24 * 60 * 60 * 30, // 1 Month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
})


module.exports = withOffline(nextConfig)