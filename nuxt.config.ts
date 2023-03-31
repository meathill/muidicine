// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: '姆伊用药助手',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
        { name: 'description', content: '科学吃药，可以让药效发挥更好，副作用更少。慢性病患者献给病友的小应用。' },
        { name: 'msapplication-TileColor', content: '#ffe4b0' },
        { name: 'theme-color', content: '#ffe4b0' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css' },
      ],
    },
  },
  css: ['@/assets/css/index.css', '@/style/layout.styl'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vite-pwa/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
    '@pinia-plugin-persistedstate/nuxt',
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: '姆伊用药助手-好好吃药，有效吃药',
      short_name: '姆伊用药助手',
      description: '科学吃药，可以让药效发挥更好，副作用更少。慢性病患者献给病友的小应用。',
      start_url: '/?source=pwa',
      theme_color: '#ffe4b0',
      display: 'standalone',
      scope: '/',
      orientation: 'portrait',
      categories: ['工具', '辅助用药'],
      icons: [
        {
          src: '/icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
});
