import { Locale, messages } from '.';

export const fetchTranslations = (locale: Locale) => {
  return Promise.resolve(messages[locale]);
};
