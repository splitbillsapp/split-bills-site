import type { Dictionary } from './dictionary';

export const en: Dictionary = {
  site: {
    name: 'Split Bills',
    tagline: 'Who owes whom, and why.',
    description:
      'Split Bills keeps the small debts between friends on your phone. Every balance shows the records behind it.',
    developer: 'Andrew Sze-To',
    supportEmail: 'support@splitbillsapp.com',
  },
  nav: {
    home: 'Home',
    privacy: 'Privacy',
    skipToContent: 'Skip to content',
    language: 'Language',
  },
  footer: {
    privacy: 'Privacy policy',
    deleteAccount: 'Deleting your account',
    madeBy: 'Made by {developer}.',
  },
  legal: {
    privacy: {
      description:
        'What Split Bills stores on your phone, what is stored if you sign in, and how to delete it.',
    },
    deleteAccount: {
      description: 'How to delete your Split Bills account, in the app or by email.',
    },
    englishOnly: 'This page is available in English.',
  },
  store: {
    comingSoon: 'Coming to Google Play',
    getIt: 'Get it on Google Play',
  },
  notFound: {
    heading: 'Nothing here.',
    body: "The page you followed doesn't exist, or it moved.",
    home: 'Go to the home page',
  },
  home: {
    lede: 'Small debts between friends, written down. Every balance shows the records behind it.',
    hero: {
      label: 'A balance and the records behind it',
      screenAlt:
        "Priya's balance in Split Bills: owes you HK$520.00, you owe ¥11,000, followed by the three expenses that produced it",
      records: [
        {
          title: 'Concert tickets',
          amount: 'HK$1,560.00',
          outcome: 'Priya owes you HK$520.00',
          direction: 'owedToYou',
        },
        {
          title: 'Shinkansen tickets',
          amount: '¥39,000',
          outcome: 'You owe Priya ¥13,000',
          direction: 'youOwe',
        },
        {
          title: 'Ramen in Tokyo',
          amount: '¥6,000',
          outcome: 'Priya owes you ¥2,000',
          direction: 'owedToYou',
        },
      ],
    },
    ways: {
      heading: 'Two ways in, both fast',
      body: 'Add IOU is one person, one number. Split a bill is the full form.',
      screenAlt: 'New expense: four people chosen, HK$900.00 in the dock, split equally, paid by you',
    },
    features: {
      heading: 'What it does',
      items: [
        {
          id: 'split',
          title: 'Four ways to split',
          body: 'Equal, percentage, weights or exact. Any number of payers.',
        },
        {
          id: 'trace',
          title: 'Balances you can trace',
          body: 'Tap a person. See every record behind the figure.',
        },
        {
          id: 'settle',
          title: 'Settle up in one tap',
          body: "Full amount and today's date, already filled in.",
        },
        {
          id: 'nudge',
          title: 'Nudge in your own voice',
          body: 'Edit the reminder and send it yourself. The app never messages anyone.',
        },
        { id: 'calendar', title: 'Groups, categories, a calendar' },
        { id: 'currency', title: 'Twenty currencies, never mixed' },
      ],
    },
    screens: {
      label: 'More screens',
      alts: {
        split: 'Percentage split with sliders and an allocation bar',
        settle: 'The settle-up sheet with the full amount pre-filled',
        calendar: 'Calendar month with per-day markers and a day agenda',
        homeZh: 'The home screen in Traditional Chinese',
      },
    },
    privacy: {
      heading: 'Nothing leaves your phone.',
      body: 'No analytics, no ads, no tracking, no contact access. Sign in only if you want a backup.',
      link: 'Read the privacy policy',
    },
    languages: {
      heading: 'Four languages',
      items: [
        { label: 'English', lang: 'en' },
        { label: '简体中文', lang: 'zh-Hans' },
        { label: '繁體中文（台灣）', lang: 'zh-Hant-TW' },
        { label: '繁體中文（香港）', lang: 'zh-Hant-HK' },
      ],
    },
    cta: {
      heading: 'Write it down.',
    },
  },
};
