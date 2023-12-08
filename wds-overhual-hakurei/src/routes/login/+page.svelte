<script>
    import {enhance} from "$app/forms";

    export let form;
</script>

<div class="main">
    <form method="post" use:enhance action="?/login" class="login_form">
        <h1>Login</h1>
        <input required type="text" value={form?.username ?? ''} name="username" placeholder="Username">
        <input required type="password" name="password" placeholder="Password">
        <a href="/">Forgot Password?</a>
        <div class="buttons">
            <a class="btn" href="/register">Don't have a account?</a>
            <button class="btn" type="submit">Submit</button>
        </div>


        {#if form?.error}
            <p class="error">{form.error}</p>
        {/if}
    </form>
</div>
<style>
    @import "$lib/style.css";

    h1 {
        text-align: center;
    }

    .login_form {
        margin: 64px auto;
        width: 70vh;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        gap: 2em;
        align-items: center;
        border: 1px solid grey;
        padding: 30px;
    }

    .login_form > input {
        width: 100%;
        height: 30%;
        text-align: center;
        font-size: 24px;
        cursor: pointer;
    }

    .login_form .btn {
        text-decoration: none;
        background-color: var(--btn-primary);
        padding: 10px;
        overflow: visible;
        color: white !important;
    }

    .login_form .btn:hover {
        font-weight: 500;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        gap: 5px;
        width: 70%;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
</style>