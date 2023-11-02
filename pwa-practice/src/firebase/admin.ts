import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

export const firebaseAdmin =
  getApps()[0] ??
  initializeApp({
    credential: cert({
      projectId: process.env.FSA_PROJECT_ID,
      privateKey: process.env.FSA_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      clientEmail: process.env.FSA_CLIENT_EMAIL,
    }),
  });

export const auth = getAuth();
