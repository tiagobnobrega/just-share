import {writable} from 'svelte/store';

const users = writable({
  'admin':'123456',
  'tiago':'123456',
});

export default {
  subscribe: users.subscribe,
  async login(user, password){
    const user = users.get
  }
}

