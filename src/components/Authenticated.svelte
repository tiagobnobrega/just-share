<script>
    import { onMount } from 'svelte';
    import * as sapper from '@sapper/app';
    import sessionStore from '../stores/sessionStore';
    export let redirectTo = '/login';
    let auth = false;
    onMount(() => {
        const unsub = sessionStore.subscribe(value => {
            if (!value.user) {
                sapper.goto(redirectTo);
            }else{
                auth = true;
            }
        });
        return () => unsub();
    });
</script>

{#if auth}
    <slot></slot>
{:else}
    <slot name="notChecked"></slot>
{/if}
