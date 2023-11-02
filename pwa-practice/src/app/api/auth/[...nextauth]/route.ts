import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FirebaseAdapter from '@next-auth/firebase-adapter';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import firebase from 'firebase/app';
import 'firebase/firestore';

//const firestore = (firebase.apps[0] ?? firebase.initializeApp(/* your config */)).firestore();

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const NextOptions = {
  // https://next-auth.js.org/configuration/providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_ID!,
      clientSecret: process.env.GOOGLE_AUTH_SECRET!,
    }),
  ],

  //...
};

const handler = NextAuth(NextOptions);

export { handler as GET, handler as POST };
