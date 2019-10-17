<script>
    import Nav from './UI/Nav.svelte'
</script>

<Nav>
<!--    Navbar Items-->
        <a slot="navbar-item" class="navbar-item">
            Home
        </a>
        <a slot="navbar-item" class="navbar-item">
            Documentation
        </a>
        <div slot="navbar-item" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
                More
            </a>

            <div class="navbar-dropdown">
                <a class="navbar-item">
                    About
                </a>
                <a class="navbar-item">
                    Jobs
                </a>
                <a class="navbar-item">
                    Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                    Report an issue
                </a>
            </div>
        </div>
<!--    Navbar End-->
    <div  class="navbar-item" slot="navbar-end">
        <div class="buttons">
            <a class="button is-primary is-outlined">
                <strong>Sign up</strong>
            </a>
            <a href="/login" class="button is-light is-outlined">
                Log in
            </a>
        </div>
    </div>
</Nav>