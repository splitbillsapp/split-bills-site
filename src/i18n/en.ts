import type { Dictionary } from './dictionary';

export const en: Dictionary = {
  site: {
    name: 'Split Bills',
    tagline: 'Who owes whom, and why.',
    description: "Split Bills: Track shared meals, tickets, and trips. Every balance shows the expenses and repayments behind it.",
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
    lede: "Track shared meals, tickets, and trips. Every balance shows the expenses and repayments behind it.",
    reassurance: "No account required. No ads.",
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
    features: {
      heading: "Keep track, from the first IOU to the last repayment",
      screenAlt: 'New expense: four people chosen, HK$900.00 in the dock, split equally, paid by you',
      items: [
        { id: 'split', title: "A quick IOU or a group bill", body: "Add an IOU for one person, or split a bill equally, by percentage, by shares, or by exact amounts. Multiple people can pay. Balances stay separate for each currency." },
        { id: 'settle', title: "Record repayments in seconds", body: "The full balance and today’s date are filled in. Record the repayment when you’ve been paid." },
        { id: 'nudge', title: "Reminders in your own words", body: "Edit your reminder, then choose when and where to send it. The app never messages anyone for you." },
      ],
    },
    privacy: {
      heading: "On your phone. Backed up only if you choose.",
      body: "Use it without an account. Sign in for backup. No ads, analytics, tracking, or contact access.",
      link: 'Read the privacy policy',
    },
    cta: {
      heading: "Stop keeping it all in your head.",
    },
  },
};
