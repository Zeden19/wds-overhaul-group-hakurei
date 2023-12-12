<script>
</script>

<div class="main">
    <div class="head">
        <div class="title">
            <img alt="link-logo" src="link.png"/>
            <span class="title">To The Future</span>
        </div>
        <div class="description">
            Access a new way to note-take, connect, and link with other students through new solutions to
            accessibility.
        </div>
        <div class="actions">
            <a href="/register" class="signup">Sign Up</a>
            <a href="/login" class="signin">Already a User? Sign In</a>
        </div>
    </div>
    <img alt="phone" src="phone-demo.png" class="phone"/>
    <img alt="splash" src="splash-img.png" class="splash"/>
</div>
<span class="copy">Copyright © 2023, Western Developers Society </span>

<style>
    @import "$lib/style.css";


    .actions {
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 10;
    }

    .actions > a {
        padding: 13px 10px 13px 10px;
        width: 45%;
        font-size: 16px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        text-decoration: none;
        text-align: center;
    }

    .signup {
        background-color: var(--btn-primary-dark);
        color: white;
        border: none;
        transition: background-color 0.5s;
    }

    .signup:hover {
        background-color: #20338d;

    }

    .signup:focus, .signup:active {
        background-color: #20338d;
        transition: none;
    }

    .signin {
        background-color: var(--btn-secondary);
        color: black;
        border: 2px solid black;
        transition: border-width 0.2s linear;
    }

    .signin:hover {
        border-width: 3px;

    }

    .phone {
        z-index: 10;
        position: fixed;
        bottom: 48px;
        right: 124px;
        height: calc(90vh - 128px);
    }

    .splash {
        position: fixed;
        bottom: 0;
        right: 0;
        height: 92vh;
        width: 50vw;
    }


</style>