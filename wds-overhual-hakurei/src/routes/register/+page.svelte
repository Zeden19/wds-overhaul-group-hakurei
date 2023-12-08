<script>
    import {blur} from "svelte/transition";
    import {enhance} from "$app/forms";

    export let form;
</script>

<div class="main">
    <form method="post" use:enhance action="?/register" class="login_form">
        <h1>Register</h1>

        <div class="input-fields">
            <input value="{form?.email ?? ''}" required type="email" name="email" placeholder="Email">
            <input value="{form?.name ?? ''}" required type="text" name="name" placeholder="Name">
        </div>

        <div class="input-fields">
            <input value="{form?.username ?? ''}" required type="text" name="username" placeholder="Username">
            <input type="password" name="password" required placeholder="Password">
        </div>

        <a href="/">Forgot Password?</a>

        <label>Disability: <select>
            <option>Mute</option>
            <option>Deaf</option>
            <option>Blind</option>
            <option>ADHD</option>
            <option>None</option>
        </select></label>

        {#if form?.error}
            <p in:blur={{}} class="error">{form.error}</p>
        {/if}

        <div class="buttons">
            <a class="btn" href="/login">Already have a account?</a>
            <button type="submit" class="btn" href="/login">Submit</button>
        </div>
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

    .input-fields > input {
        width: 45%;
        height: 30%;
        text-align: center;
        font-size: 24px;
        cursor: pointer;
    }

    .input-fields {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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

    button {
        background: none;
        border: none;
    }

    .error {
        color: red;
        margin-block-start: 0;
        margin-block-end: 0;
    }
</style>