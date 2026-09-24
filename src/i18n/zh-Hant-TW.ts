import type { Dictionary } from './dictionary';

/**
 * Taiwan: written register with Taiwan vocabulary (隱私權, 帳號, 電子郵件, 什麼),
 * written separately from the Hong Kong copy, not converted. Draft pending native review.
 */
export const zhHantTW: Dictionary = {
  site: {
    name: 'Split Bills',
    tagline: '誰欠誰，為什麼。',
    description: 'Split Bills 把朋友之間的小額欠款記在你的手機裡。每筆餘額都列出背後的紀錄。',
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
    lede: '朋友之間的小額欠款，記下來。每筆餘額都列出背後的紀錄。',
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
    ways: {
      heading: '兩種記法，都很快',
      body: '「新增欠款」是一個人、一個數字。「分帳」是完整表單。',
      screenAlt: '新增支出：選了四個人，底欄是 HK$900.00，平均分攤，由你付款',
    },
    features: {
      heading: '有什麼功能',
      items: [
        {
          id: 'split',
          title: '四種分法',
          body: '平均、百分比、權重或指定金額。付款人不限一人。',
        },
        {
          id: 'trace',
          title: '餘額有跡可循',
          body: '點一個人，看見背後每筆紀錄。',
        },
        {
          id: 'settle',
          title: '一鍵結清',
          body: '全額和今天的日期，都已填好。',
        },
        {
          id: 'nudge',
          title: '用你自己的話提醒',
          body: '改好提醒訊息，自己傳出去。App 不會替你聯絡任何人。',
        },
        { id: 'calendar', title: '群組、分類、月曆' },
        { id: 'currency', title: '二十種貨幣，絕不混算' },
      ],
    },
    screens: {
      label: '更多畫面',
      alts: {
        split: '百分比分帳，附滑桿與分配條',
        settle: '結清面板，已填好全額',
        calendar: '月曆檢視，每日有標記，下方是當日行程',
      },
    },
    privacy: {
      heading: '什麼都不會離開你的手機。',
      body: '沒有分析、沒有廣告、沒有追蹤、不讀取聯絡人。只有想備份時才需要登入。',
      link: '閱讀隱私權政策',
    },
    cta: {
      heading: '記下來。',
    },
  },
};
