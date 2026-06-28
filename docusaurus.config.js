// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '劍道學習手冊',
  tagline: '從零開始的劍道學習指南',
  favicon: 'img/favicon.ico',

  // GitHub Pages 部署設定 — 請改成你的 GitHub 帳號和 repo 名稱
  url: 'https://halyn-eng.github.io',
  baseUrl: '/kendo-site/',

  organizationName: 'halyn-eng', // GitHub 帳號
  projectName: 'kendo-site',                // GitHub repo 名稱

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '⚔️ 劍道學習手冊',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'kendoSidebar',
            position: 'left',
            label: '學習內容',
          },
          {
            href: 'https://github.com/YOUR_GITHUB_USERNAME/kendo-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `道館規定：面・小手・胴 only（無突き）`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
      },
    }),
};

module.exports = config;
