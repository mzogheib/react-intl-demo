import React, { ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { Locale } from '.';
import { fetchTranslations } from './translationsService';
import LanguageSelector from '../LanguageSelector';

type Messages = Record<string, string>;
type Translations = Record<Locale, Messages | undefined>;

const initialTranslations = {
  [Locale.en]: undefined,
  [Locale.de]: undefined,
};

type Props = {
  children: ReactNode;
};

const TranslationsProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState(Locale.en);
  const [translations, setTranslations] =
    useState<Translations>(initialTranslations);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const messages = translations[locale];

  useEffect(() => {
    if (messages || isLoading || isError) {
      return;
    }

    const getTranslations = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const translationsForLocale = await fetchTranslations(locale);
        setTranslations({
          ...translations,
          [locale]: translationsForLocale,
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getTranslations();
  }, [isError, isLoading, locale, messages, translations]);

  const handleSelectLocale = (locale: Locale) => {
    setIsError(false);
    setLocale(locale);
  };

  return (
    <>
      <div>
        <LanguageSelector
          selectedLocale={locale}
          onSelect={handleSelectLocale}
          disabled={isLoading}
        />
      </div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error! :(</div>}
      {!isLoading && messages && (
        <IntlProvider
          messages={messages}
          locale={locale}
          defaultLocale={Locale.en}
        >
          {children}
        </IntlProvider>
      )}
    </>
  );
};

export default TranslationsProvider;
