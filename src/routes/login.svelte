<script>
    import sessionStore from '../stores/sessionStore'
    import * as sapper from '@sapper/app';
    import {onMount, onDestroy} from 'svelte'

    let username = '';
    let password = '';
    let unsub;
    let session = {};

    $: isLoading = session.status === 'loading';

    async function handleLogin() {
        await sessionStore.login(username, password);
    }

    onMount(() => {
        if (session.user) sapper.goto('/');
       unsub = sessionStore.subscribe(value => {
            session = value;
           console.log('onMount.subscribe:',{session})
            if (session.user) sapper.goto('/');
        });
    });

</script>
<style>
    .interactive-bg {
        height: 100vh;
        background: linear-gradient(to right, rgb(179, 255, 171), rgb(18, 255, 247));
        /*box-shadow: inset 24px 4px 64px -24px rgba(71,71,71,1);*/
        padding: 0px;
        border-width: 0 0 0 4px;
        border-color: #dbdbdb;
        border-style: solid;
    }

    @media (max-width: 769px) {
        .interactive-bg {
            display: none
        }
    }

    .login-logo {
        margin: 0 auto;
        margin-bottom: 50px;
        max-height: 100px;

    }

    .columns {
        margin: 0px;
    }
</style>
<div class="columns is-vcentered">
    <div class="login column is-4 ">
        <section class="section">
            <div class="has-text-centered">
                <img alt="login" class="login-logo" src="images/money-pizza-logo.png">
            </div>

            <div class="field">
                <label for="usename" class="label">Username</label>
                <div class="control has-icons-right">
                    <input id="usename" class="input" type="text" bind:value={username}/>
                    <span class="icon is-small is-right">
                <i class="fa fa-user"></i>
              </span>
                </div>
            </div>

            <div class="field">
                <label for="password" class="label">Password</label>
                <div class="control has-icons-right">
                    <input id="password" class="input" type="password" bind:value={password}>
                    <span class="icon is-small is-right">
                <i class="fa fa-key"></i>
              </span>
                </div>
            </div>
            <div class="has-text-centered">
                <button class:is-loading="{isLoading}" class="button is-vcentered is-primary is-outlined" on:click={handleLogin}>Login</button>
            </div>
            <div class="has-text-centered">
                <a href="signup.html"> Don't you have an account? Sign up now!</a>
            </div>
            <a href="/"> enter</a>
        </section>
    </div>
    <div id="particles-js" class="interactive-bg column is-8">
    </div>
</div>