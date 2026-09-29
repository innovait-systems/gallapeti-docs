import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Galla Peti Help',
  tagline: 'How to bill faster with Galla Peti',
  favicon: 'img/favicon.png',

  // Poppins — same typeface as the app and website.
  stylesheets: ['https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'],

  future: {
    v4: true,
  },

  url: 'https://help.gallapeti.innovait-systems.com',
  baseUrl: '/',

  organizationName: 'innovait-systems',
  projectName: 'gallapeti-docs',

  // Warn (don't fail) on broken links while guides are still being authored.
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // The app is English-only for now; add locales here as the app and guides are translated.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // Docs-only mode: guides are served at the site root.
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      // Offline search — indexed at build time, no external service needed.
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // Docs are served at the site root (routeBasePath '/'), so say so or nothing indexes.
        docsRouteBasePath: '/',
        indexDocs: true,
        indexBlog: false,
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        language: ['en'],
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Galla Peti Help',
      logo: {
        alt: 'Galla Peti',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          href: 'https://gallapeti.innovait-systems.com',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'mailto:gallapeti@innovait-systems.com',
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {label: 'Getting started', to: '/getting-started/set-up-shop'},
            {label: 'Billing', to: '/billing/new-sale'},
            {label: 'Printing', to: '/printing/connect-bluetooth-printer'},
          ],
        },
        {
          title: 'Galla Peti',
          items: [
            {label: 'Website', href: 'https://gallapeti.innovait-systems.com'},
            {label: 'Privacy Policy', href: 'https://gallapeti.innovait-systems.com/privacy'},
            {label: 'Support', href: 'https://gallapeti.innovait-systems.com/support'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Innovait Systems · Galla Peti`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
