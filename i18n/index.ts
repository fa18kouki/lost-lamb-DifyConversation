export const i18n = {
  defaultLocale: 'ja',
  locales: ['en', 'zh-Hans', 'ja'],
} as const

export type Locale = typeof i18n['locales'][number]
