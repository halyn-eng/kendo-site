/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  kendoSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🏠 首頁',
    },
    {
      type: 'category',
      label: '📖 基礎知識',
      items: [
        'basics/posture',
        'basics/strikes',
        'basics/techniques',
        'basics/distance',
      ],
    },
    {
      type: 'category',
      label: '⚔️ 読み練習',
      items: [
        'techniques/reading',
      ],
    },
    {
      type: 'category',
      label: '⚠️ 常見錯誤',
      items: [
        'techniques/common-errors',
      ],
    },
    {
      type: 'category',
      label: '📅 每日練習',
      items: [
        'techniques/daily-practice',
      ],
    },
  ],
};

module.exports = sidebars;
