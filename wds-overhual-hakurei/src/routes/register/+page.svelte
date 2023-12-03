<div class="main">
    <form class="login_form">
        <h1>Register</h1>

        <div class="input-fields">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Name">
        </div>

        <div class="input-fields">
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
        </div>

        <a href="/">Forgot Password?</a>

        <label>Disability: <select>
            <option>Mute</option>
            <option>Deaf</option>
            <option>Blind</option>
            <option>ADHD</option>
            <option>None</option>
        </select></label>

        <div class="buttons">
            <a class="btn" href="/register">Don't have a account?</a>
            <a class="btn" href="/notes">Submit</a>
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
</style>