// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'intro',
        'quickstart',
        'editions-and-channels',
        'release-notes',
      ],
    },
    {
      type: 'category',
      label: 'Workstation App Guide',
      collapsed: false,
      items: [
        'app/workstation-ui',
        'app/exchanges-and-data',
        'app/indicators-and-analysis',
        'app/drawing-tools',
        'app/screen-capture',
        'app/ai-copilot',
        'app/ai-api-keys-setup',
        'app/telegram-bot-setup',
        'app/mcp-server-and-tools',
        'app/pro-upgrade-and-payment',
        'app/shortcuts-and-settings',
        'app/troubleshooting-and-faq',
      ],
    },
    {
      type: 'category',
      label: 'PTView.SDK Developer Guide',
      collapsed: false,
      items: [
        'sdk/getting-started',
        'sdk/indicator-development',
        'sdk/advanced-indicators',
        'sdk/plugin-packaging',
        'sdk/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'Legal & Policies',
      collapsed: true,
      items: [
        'legal/terms-of-use',
        'legal/risk-and-ai-disclaimer',
        'legal/privacy-policy',
        'legal/refund-policy',
        'legal/third-party-notices',
      ],
    },
  ],
};

export default sidebars;
