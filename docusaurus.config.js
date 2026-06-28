// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '劍道學習手冊',
  tagline: '從零開始的劍道學習指南',
  favicon: 'img/favicon.ico',

  url: 'https://halyn-eng.github.io',
  baseUrl: '/kendo-site/',

  organizationName: 'halyn-eng',
  projectName: 'kendo-site',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
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
          href: 'https://github.com/halyn-eng/kendo-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: '道館規定：面・小手・胴 only（無突き）',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
    },
  }),
};

module.exports = config;
