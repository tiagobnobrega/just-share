<script>
    let isMenuActive = false;

    $:console.log({isMenuActive});
    function toggleMenu() {
        isMenuActive = !isMenuActive
    }
</script>
<style>
    .is-bg-gradient {
        background: linear-gradient(to right, rgb(179, 255, 171), rgb(18, 255, 247));
    }

    .navbar {
        color: #fff;
    }
</style>
<nav class="navbar is-bg-gradient" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <img src="/images/money-pizza-logo.png" width="28" height="28">
        </a>

        <a role="button" class="navbar-burger burger" class:is-active={isMenuActive} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" on:click={toggleMenu}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" class:is-active={isMenuActive}>
        <div class="navbar-start" >
            <slot name="navbar-item"></slot>
        </div>

        <div class="navbar-end">
            <slot name="navbar-end"></slot>
        </div>
    </div>
</nav>