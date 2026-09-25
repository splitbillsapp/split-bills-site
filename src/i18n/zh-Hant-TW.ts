import type { Dictionary } from './dictionary';

/**
 * Taiwan: written register with Taiwan vocabulary (隱私權, 帳號, 電子郵件, 什麼),
 * written separately from the Hong Kong copy, not converted. Draft pending native review.
 */
export const zhHantTW: Dictionary = {
  site: {
    name: 'Split Bills',
    tagline: '誰欠誰，為什麼。',
    description: "Split Bills: 記下聚餐、票券和旅行的共同開銷。每筆餘額都列出背後的支出與還款紀錄。",
    developer: 'Andrew Sze-To',
    supportEmail: 'support@splitbillsapp.com',
  },
  nav: {
    home: '首頁',
    privacy: '隱私',
    skipToContent: '跳到主要內容',
    language: '語言',
  },
  footer: {
    privacy: '隱私權政策',
    deleteAccount: '刪除帳號',
    madeBy: '由 {developer} 製作。',
  },
  legal: {
    privacy: {
      description: 'Split Bills 在你手機上儲存什麼、登入後會儲存什麼，以及如何刪除。',
    },
    deleteAccount: {
      description: '如何刪除 Split Bills 帳號：在 App 內，或用電子郵件。',
    },
    englishOnly: '此頁目前僅提供英文版。',
  },
  store: {
    comingSoon: '即將登陸 Google Play',
    getIt: '前往 Google Play 下載',
  },
  notFound: {
    heading: '這裡什麼都沒有。',
    body: '你打開的頁面不存在，或已經移走了。',
    home: '回到首頁',
  },
  home: {
    lede: "記下聚餐、票券和旅行的共同開銷。每筆餘額都列出背後的支出與還款紀錄。",
    reassurance: "不需帳號。沒有廣告。",
    hero: {
      label: '一筆餘額，以及背後的紀錄',
      screenAlt:
        'Split Bills 中 Priya 的餘額：欠你 HK$520.00，你欠 ¥11,000，下方是產生這筆餘額的三筆支出',
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
      heading: "從記下欠款，到收到還款",
      screenAlt: '新增支出：選了四個人，底欄是 HK$900.00，平均分攤，由你付款',
      items: [
        { id: 'split', title: "一筆欠款，或一群人分帳", body: "記下與一個人的欠款，或依平均、百分比、份數或指定金額分帳。支援多人付款，各種幣別的餘額分開計算。" },
        { id: 'settle', title: "輕鬆記錄還款", body: "全額和今天的日期都已填好。收到款項後，就能記錄還款。" },
        { id: 'nudge', title: "用你自己的話提醒", body: "編輯提醒訊息，自行決定何時、透過哪個 App 傳送。App 不會替你聯絡任何人。" },
      ],
    },
    privacy: {
      heading: "存在手機，備份由你決定。",
      body: "不需帳號就能使用。想備份時再登入。沒有廣告、分析或追蹤，也不讀取聯絡人。",
      link: '閱讀隱私權政策',
    },
    cta: {
      heading: "記下來，不用全靠記憶。",
    },
  },
};
