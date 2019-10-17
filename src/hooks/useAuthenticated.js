import { onMount } from 'svelte';
import * as sapper from '@sapper/app';
import sessionStore from '../stores/sessionStore';

export default function useAuthenticated(redirectTo = '/login') {
  onMount(() => {
    const unsub = sessionStore.subscribe(value => {
      if (!value.user) {
        sapper.goto(redirectTo);
      }
    });
    return () => unsub();
  });
}
