// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '夏特稀筆記',
  tagline: 'TershiXia\'s Notes',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://note.tershi.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cutespirit', // Usually your GitHub org/user name.
  projectName: '夏特稀筆記', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mmm25002500/notes/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mmm25002500/notes/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        sidebarPath: require.resolve('./sidebars.js'),
        id: 'life',
        routeBasePath: 'life',
        path: 'life',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '夏特稀筆記',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '筆記',
          },
          { to: '/life/intro', label: '生活', position: 'left' },
          { to: '/blog', label: '隨筆', position: 'left' },
          {
            href: 'https://tershi.com',
            label: '我的網站',
            position: 'left',
          },
          {
            href: 'https://github.com/mmm25002500/notes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '筆記',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://facebook.com/TershiXia',
              },
              {
                label: 'Github',
                href: 'https://github.com/mmm25002500',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/TershiXia',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/tershixia/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'My Website',
                href: 'https://tershi.com',
              },
              {
                label: 'My Resume',
                href: 'https://resume.tershi.com',
              },
              {
                label: 'My Blog',
                href: 'https://blog.tershi.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TershiXia.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
