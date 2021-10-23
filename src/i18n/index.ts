import enMessasges from './messages/en.json';
import deMessasges from './messages/de.json';
import jaMessasges from './messages/ja.json';

export enum Locale {
  en = 'en',
  de = 'de',
  ja = 'ja',
}

const messagesWithEnFallback = (localizedMessages: Record<string, string>) => ({
  ...enMessasges,
  ...localizedMessages,
});

export const messages = {
  [Locale.en]: enMessasges,
  [Locale.de]: messagesWithEnFallback(deMessasges),
  [Locale.ja]: messagesWithEnFallback(jaMessasges),
};
