// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PtView Workstation',
  tagline: 'Multi-Exchange Crypto Trading Platform',
  favicon: 'img/favicon.ico',

  url: 'https://docs.ptview.app',
  baseUrl: '/',

  organizationName: 'vntradesoft',
  projectName: 'ptview-docs',
  trailingSlash: false,

  clientModules: ['./src/clientModules/metricsTracker.js'],

  // Layer 1: Cloudflare Web Analytics beacon for docs.ptview.app
  scripts: [
    {
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      type: 'module',
      'data-cf-beacon': '{"token": "4c6c49427b384b1fbd9ac7fafc570b4d"}',
    },
  ],

  onBrokenLinks: 'warn',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['en', 'vi'],
        indexBlog: false,
        docsRouteBasePath: '/',
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
      en: { label: 'English' },
      vi: { label: 'Tiếng Việt' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/vntradesoft/ptview-docs/tree/main/',
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'PtView Docs',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/vntradesoft/ptview-releases/releases',
            label: 'Download Installer',
            position: 'right',
          },
          {
            href: 'https://github.com/vntradesoft/ptview-sdk',
            label: 'PTView.SDK',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product & Releases',
            items: [
              {
                label: 'Download Setup.exe & Portable.zip',
                href: 'https://github.com/vntradesoft/ptview-releases/releases',
              },
              {
                label: 'Community vs Pro Editions',
                to: '/editions-and-channels',
              },
              {
                label: 'Release Notes',
                to: '/release-notes',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'PTView.SDK Repository',
                href: 'https://github.com/vntradesoft/ptview-sdk',
              },
              {
                label: 'Indicator SDK Guide',
                to: '/sdk/getting-started',
              },
            ],
          },
          {
            title: 'Legal & Policies',
            items: [
              {
                label: 'Terms of Use (EULA)',
                to: '/legal/terms-of-use',
              },
              {
                label: 'Risk & AI Disclaimer',
                to: '/legal/risk-and-ai-disclaimer',
              },
              {
                label: 'Privacy Policy',
                to: '/legal/privacy-policy',
              },
              {
                label: 'Trial & Refund Policy',
                to: '/legal/refund-policy',
              },
              {
                label: 'Third-Party Notices (OSS)',
                to: '/legal/third-party-notices',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Official Website',
                href: 'https://ptview.app',
              },
              {
                label: 'support@ptview.app',
                href: 'mailto:support@ptview.app',
              },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/vntradesoft/ptview-releases/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PtView. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'powershell', 'json'],
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
      },
    }),
};

export default config;

