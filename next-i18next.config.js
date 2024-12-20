// @ts-check
/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  debug: false,
  i18n: {
    defaultLocale: 'en',
    locales: [
      'ar',
      'au',
      'bg',
      'bn',
      'br',
      'cs',
      'da',
      'de',
      'el',
      'en',
      'es',
      'et',
      'fa',
      'fi',
      'fr',
      'gb',
      'gu',
      'he',
      'hi',
      'hr',
      'hu',
      'id',
      'it',
      'ja',
      'kn',
      'ko',
      'lt',
      'lv',
      'ml',
      'nl',
      'no',
      'pl',
      'pt',
      'ro',
      'ru',
      'sk',
      'sl',
      'sr',
      'sv',
      'ta',
      'te',
      'th',
      'tr',
      'uk',
      'ur',
      'vi',
      'zh',
      'zhtw',
    ],
  },
  defaultNS: 'common',
  ns: ['agent', 'common', 'constants', 'message'],
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  saveMissing: false,
};