import * as firebase from 'firebase';
import 'firebase/database';
import { firebaseConfig } from '../config';

// Required for side-effects
// require('firebase/firestore');
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };
// Initialize db
export const db = firebase.firestore();
