export const Pages = {
  HOME: '/',
  QUIZ: '/quiz',
  RESULT: '/result',
  SUBSCRIPTION: '/subscription',
  PAYMENT: '/payment',
} as const;

export type PagePaths = (typeof Pages)[keyof typeof Pages];
