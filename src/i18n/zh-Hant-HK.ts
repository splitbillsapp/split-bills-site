import type { Dictionary } from './dictionary';

/**
 * Hong Kong: written register with Hong Kong vocabulary (私隱, 帳戶, 電郵, 甚麼),
 * warm and brief rather than jokey. Draft pending native review.
 */
export const zhHantHK: Dictionary = {
  site: {
    name: 'Split Bills',
    tagline: '誰欠誰，為甚麼。',
    description: "Split Bills: 聚餐、門票、旅行開支，一一記下。每個結餘都列出背後的支出和還款紀錄。",
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
    lede: "聚餐、門票、旅行開支，一一記下。每個結餘都列出背後的支出和還款紀錄。",
    reassurance: "毋須帳戶。沒有廣告。",
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
    features: {
      heading: "由記下欠款，到收回款項",
      screenAlt: '新增支出：選了四個人，底欄是 HK$900.00，平均分攤，由你付款',
      items: [
        { id: 'split', title: "一筆欠款，或一班人分帳", body: "為一個人記下欠款，或按平均、百分比、份數或指定金額分帳。可以多人付款，各種貨幣的結餘分開計算。" },
        { id: 'settle', title: "輕鬆記下還款", body: "全數結餘和今天的日期已經填好。收到款項後，即可記下還款。" },
        { id: 'nudge', title: "用你自己的話提醒", body: "編輯提醒訊息，自行決定何時、用甚麼方式傳送。應用程式不會替你聯絡任何人。" },
      ],
    },
    privacy: {
      heading: "存在手機，備份由你決定。",
      body: "毋須帳戶也能使用。想備份才登入。沒有廣告、分析或追蹤，也不讀取聯絡人。",
      link: '閱讀私隱政策',
    },
    cta: {
      heading: "記下來，不用再靠記性。",
    },
  },
};
