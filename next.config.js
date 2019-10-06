const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')

const nextConfig = withSass({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
})


module.exports = withOffline(nextConfig)