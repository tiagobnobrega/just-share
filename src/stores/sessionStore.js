import { writable } from 'svelte/store';
import userService from '../services/userService';

const sessionStore = writable({
  user: null,
  status: 'idle',
  message: '',
});

export default {
  subscribe: sessionStore.subscribe,
  async login(username, password) {
    sessionStore.update(() => ({ user: null, status: 'loading', message: '' }));
    const user = await userService.login(username, password);
    if (!user) {
      return sessionStore.update(state => ({
        ...state,
        status: 'error',
        message: 'Usuário ou senha incorretos',
      }));
    }
    console.log('loginStore::user=', { user });
    return sessionStore.update(() => ({ user, status: 'idle', message: '' }));
  },
};
