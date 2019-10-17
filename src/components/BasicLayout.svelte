<script>
    import AppNav from './AppNav.svelte';
    import Authenticated from './Authenticated.svelte';
</script>

<Authenticated>
    <AppNav/>
    <div class="container is-fluid">
        <slot></slot>
    </div>
    <div slot="notChecked">
        <h1>LOADING</h1>
    </div>
</Authenticated>