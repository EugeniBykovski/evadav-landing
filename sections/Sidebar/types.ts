export const Pages = {
  HOME: '/',
  QUIZ: '/quiz',
  RESULT: '/result',
  SUBSCRIPTION: '/subscription',
  PAYMENT: '/payment',
  TERMS: '/policy/terms',
  PRIVACY: '/policy/privacy',
  SUPPORT: '/policy/support',
} as const;

export type PagePaths = (typeof Pages)[keyof typeof Pages];
