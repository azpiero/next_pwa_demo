export { default } from 'next-auth/middleware'; // defaultをママ使う。

/**
 * next-authで認証が必要なページの設定を行う
 */
export const config = {
  matcher: ['/((?!register|api|signin).*)'], // ?!で否定です。
};
