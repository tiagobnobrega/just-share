import { db } from './common';

const usersCol = db.collection('users');
export default {
  async login(username, password) {
    const userDoc = await usersCol.doc(username).get();
    const user = userDoc.data();
    if (user && user.password === password) {
      return user;
    }
    return null;
  },
};
