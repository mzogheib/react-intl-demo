import { Locale } from '.';

const baseUrl = 'https://api.phrase.com/v2';
const fallbackLocaleId = Locale.en;

const projectId = process.env.REACT_APP_PHRASE_PROJECT_ID;
const accessToken = process.env.REACT_APP_PHRASE_ACCESS_TOKEN;

type MakeQueryParams = {
  [key: string]: string | boolean | number | undefined | null;
};

const makeQueryParams = (params: MakeQueryParams) =>
  Object.keys(params)
    .filter((key) => params[key] !== undefined && params[key] !== null)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          params[key] as string
        )}`
    )
    .join('&');

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
          include_empty_translations: true,
          fallback_locale_id: fallbackLocaleId,
        }
      : {};

  const queryParams = makeQueryParams({
    file_format: 'react_simple_json',
    // branch
    ...fallbackLocaleParams,
  });
  const url = `${baseUrl}/projects/${projectId}/locales/${locale}/download?${queryParams}`;

  const data = await fetch(url, fetchOptions);
  return data.json();
};
