export const ITEMS_PER_PAGE = 30;

export const supportedThemes = {
  light: 'light',
  dark: 'dark',
} as const;
export type Themes = keyof typeof supportedThemes;