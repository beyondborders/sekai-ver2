module.exports = {
  images: {
    minimumCacheTTL: 120,
    remotePatterns: [
      { hostname: 'localhost' },
      { hostname: 'sekai-property-assets.s3.ap-northeast-1.amazonaws.com' },
      { hostname: 'sekai-property-assets.s3-ap-northeast-1.amazonaws.com' },
      { hostname: 's3-ap-northeast-1.amazonaws.com' },
    ],
  }
}