import type { Dictionary } from './dictionary';

/**
 * Hong Kong: written register with Hong Kong vocabulary (私隱, 帳戶, 電郵, 甚麼),
 * warm and brief rather than jokey. Draft pending native review.
 */
export const zhHantHK: Dictionary = {
  site: {
    name: 'Split Bills',
    tagline: '誰欠誰，為甚麼。',
    description: 'Split Bills 將朋友之間的小數目記在你的手機上。每個結餘都列出背後的紀錄。',
    developer: 'Andrew Sze-To',
    supportEmail: 'support@splitbillsapp.com',
  },
  nav: {
    home: '主頁',
    privacy: '私隱',
    skipToContent: '跳至內容',
    language: '語言',
  },
  footer: {
    privacy: '私隱政策',
    deleteAccount: '刪除帳戶',
    madeBy: '由 {developer} 製作。',
  },
  legal: {
    privacy: {
      description: 'Split Bills 在你手機上儲存甚麼、登入後會儲存甚麼，以及如何刪除。',
    },
    deleteAccount: {
      description: '如何刪除 Split Bills 帳戶：在應用程式內，或以電郵。',
    },
    englishOnly: '此頁只提供英文版。',
  },
  store: {
    comingSoon: 'Google Play 即將推出',
    getIt: '到 Google Play 下載',
  },
  notFound: {
    heading: '這裏沒有東西。',
    body: '你打開的頁面不存在，或者已經搬走了。',
    home: '返回主頁',
  },
  home: {
    lede: '朋友之間的小數目，記下來。每個結餘都列出背後的紀錄。',
    hero: {
      label: '一個結餘，以及背後的紀錄',
      screenAlt:
        'Split Bills 中 Priya 的結餘：欠你 HK$520.00，你欠 ¥11,000，下面是產生這個結餘的三筆支出',
      records: [
        {
          title: '演唱會門票',
          amount: 'HK$1,560.00',
          outcome: 'Priya 欠你 HK$520.00',
          direction: 'owedToYou',
        },
        {
          title: '新幹線車票',
          amount: '¥39,000',
          outcome: '你欠 Priya ¥13,000',
          direction: 'youOwe',
        },
        {
          title: '東京拉麵',
          amount: '¥6,000',
          outcome: 'Priya 欠你 ¥2,000',
          direction: 'owedToYou',
        },
      ],
    },
    ways: {
      heading: '兩種記法，都好快',
      body: '「新增欠條」是一個人、一個數目。「分帳」是完整表格。',
      screenAlt: '新增支出：選了四個人，底欄是 HK$900.00，平均分攤，由你付款',
    },
    features: {
      heading: '有甚麼功能',
      items: [
        {
          id: 'split',
          title: '四種分法',
          body: '平均、百分比、比重或指定金額。可以多人付款。',
        },
        {
          id: 'trace',
          title: '結餘可以追溯',
          body: '點一個人，看到背後每筆紀錄。',
        },
        {
          id: 'settle',
          title: '一下就結清',
          body: '全數金額和今天的日期，已經填好。',
        },
        {
          id: 'nudge',
          title: '用你自己的話提醒',
          body: '改好提醒訊息，自己發出去。應用程式不會替你聯絡任何人。',
        },
        { id: 'calendar', title: '群組、分類、月曆' },
        { id: 'currency', title: '二十種貨幣，不會混算' },
      ],
    },
    screens: {
      label: '更多畫面',
      alts: {
        split: '百分比分帳，有滑桿和分配條',
        settle: '結清面板，已填好全數金額',
        calendar: '月曆，每日有標記，下方是當日清單',
        homeZh: '繁體中文主頁',
      },
    },
    privacy: {
      heading: '甚麼都不會離開你的手機。',
      body: '沒有分析、沒有廣告、沒有追蹤、不讀取聯絡人。只有你想備份時才需要登入。',
      link: '閱讀私隱政策',
    },
    languages: {
      heading: '四種語言',
      items: [
        { label: 'English', lang: 'en' },
        { label: '简体中文', lang: 'zh-Hans' },
        { label: '繁體中文（台灣）', lang: 'zh-Hant-TW' },
        { label: '繁體中文（香港）', lang: 'zh-Hant-HK' },
      ],
    },
    cta: {
      heading: '記低。',
    },
  },
};
