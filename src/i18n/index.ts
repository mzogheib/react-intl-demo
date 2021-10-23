import enMessasges from './messages/en.json';
import deMessasges from './messages/de.json';
import jpMessasges from './messages/jp.json';

export enum Locale {
  en = 'en',
  de = 'de',
  jp = 'jp',
}

const messagesWithEnFallback = (localizedMessages: Record<string, string>) => ({
  ...enMessasges,
  ...localizedMessages,
});

export const messages = {
  [Locale.en]: enMessasges,
  [Locale.de]: messagesWithEnFallback(deMessasges),
  [Locale.jp]: messagesWithEnFallback(jpMessasges),
};
