/**
 * The shape every locale must fill. Keys name the meaning of a string, never
 * its phrasing, so each locale can choose its own register.
 */
export type FeatureId = 'split' | 'trace' | 'settle' | 'nudge' | 'calendar' | 'currency';

export type Direction = 'owedToYou' | 'youOwe';

export interface Dictionary {
  site: {
    name: string;
    tagline: string;
    description: string;
    developer: string;
    supportEmail: string;
  };
  nav: {
    home: string;
    privacy: string;
    skipToContent: string;
    language: string;
  };
  footer: {
    privacy: string;
    deleteAccount: string;
    madeBy: string;
  };
  legal: {
    privacy: { description: string };
    deleteAccount: { description: string };
    englishOnly: string;
  };
  store: {
    comingSoon: string;
    getIt: string;
  };
  notFound: {
    heading: string;
    body: string;
    home: string;
  };
  home: {
    lede: string;
    hero: {
      label: string;
      screenAlt: string;
      records: { title: string; amount: string; outcome: string; direction: Direction }[];
    };
    ways: {
      heading: string;
      body: string;
      screenAlt: string;
    };
    features: {
      heading: string;
      items: { id: FeatureId; title: string; body?: string }[];
    };
    screens: {
      label: string;
      alts: { split: string; settle: string; calendar: string; homeZh: string };
    };
    privacy: {
      heading: string;
      body: string;
      link: string;
    };
    languages: {
      heading: string;
      items: { label: string; lang: string }[];
    };
    cta: {
      heading: string;
    };
  };
}
