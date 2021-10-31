import { Locale } from '.';

const baseUrl = 'https://api.phrase.com/v2';
const fallbackLocaleId = Locale.en;

const projectId = process.env.REACT_APP_PHRASE_PROJECT_ID;
const accessToken = process.env.REACT_APP_PHRASE_ACCESS_TOKEN;

const fetchOptions = {
  headers: new Headers({
    Authorization: `Basic ${btoa(`${accessToken}:`)}`,
  }),
};

export const fetchTranslations = async (locale: Locale) => {
  // Phrase can sometimes return null results when fallback and locale are the same.
  const fallbackLocaleParams =
    fallbackLocaleId !== locale
      ? {
          include_empty_translations: 'true',
          fallback_locale_id: fallbackLocaleId,
        }
      : undefined;

  const queryParams = new URLSearchParams({
    file_format: 'react_simple_json',
    branch: 'staging',
    ...fallbackLocaleParams,
  });
  const searchString = `?${queryParams.toString()}`;
  const url = `${baseUrl}/projects/${projectId}/locales/${locale}/download${searchString}`;

  const data = await fetch(url, fetchOptions);

  if (data.ok) {
    return data.json();
  } else {
    throw data.json();
  }
};
