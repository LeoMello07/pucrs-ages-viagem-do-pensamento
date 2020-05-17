window.addEventListener = (x) => x;

import * as Firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/auth';

import config from './config';

const app = Firebase.initializeApp(config.firebase);

export const firestore = app.firestore();
export const auth = app.auth();
export default Firebase;
