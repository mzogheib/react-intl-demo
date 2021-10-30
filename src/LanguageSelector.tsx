import React, { ChangeEvent } from 'react';

import { Locale } from './i18n';

const langauges = [
  { locale: Locale.en, label: 'English ' },
  { locale: Locale.de, label: 'Deutsche ' },
];

type Props = {
  disabled?: boolean;
  selectedLocale: Locale;
  onSelect: (locale: Locale) => void;
};

const LanguageSelector = ({ disabled, selectedLocale, onSelect }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    onSelect(event.target.value as Locale);

  return (
    <select value={selectedLocale} onChange={handleChange} disabled={disabled}>
      {langauges.map(({ locale, label }) => (
        <option key={locale} value={locale}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
