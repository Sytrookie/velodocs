const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
  })


  module.exports = {
    ...withNextra(),
    //assetPrefix: isProduction ? '/velocity' : '', 
    assetPrefix: '/velocity',
    basePath: '/velocity',
    output: 'export',
    distDir: '../docs',
    images: {
      unoptimized: true,
    },
  };
   
  //module.exports = withNextra()
   
  // If you have other Next.js configurations, you can pass them as the parameter:
  // module.exports = withNextra({ /* other next.js config */ })