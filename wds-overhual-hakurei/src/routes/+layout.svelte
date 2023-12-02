<script>
    import {page} from "$app/stores";
</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>InkLink</title>
    <link rel="icon" href="link.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet">
</head>
<body>
<main>
    <div class="navbar">
        <div class="pages">
            <img src="logo.png" alt="logo">
            <a class:selected="{$page.url.pathname === '/'}" href="/">Home</a>
            <a class:selected="{$page.url.pathname === '/pricing'}" href="/pricing">Pricing</a>
            <a class:selected="{$page.url.pathname === '/teams'}" href="/teams">For Teams</a>
            <a class:selected="{$page.url.pathname === '/individuals'}" href="/individuals">For Individuals</a>
            <a class:selected="{$page.url.pathname === '/mission'}" href="/mission">Mission</a>
        </div>
        <div class="general">
            <a class:selected="{$page.url.pathname === '/help'}" href="/help">Help</a>
            <a class:selected="{$page.url.pathname === '/register'}" href="/register">Register</a>
            <a class:selected="{$page.url.pathname === '/login'}" href="/login">Login</a>
            <a href="/download" class="btn">Download</a>
        </div>
    </div>
</main>
</body>
<slot/>
</html>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--border);
    }

    .navbar a {
        color: var(--link-color);
        justify-content: flex-start;
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        text-align: left;
        text-decoration: none;
        display: inline-block;
        padding-right: 5px;
        padding-left: 5px;
        height: fit-content;
    }

    .navbar a:hover, .navbar .btn:hover {
        color: black;
        font-weight: 400;
    }

    .navbar .selected {
        border-bottom: 1px solid grey;
    }

    .pages {
        display: flex;
        justify-content: flex-start;
        width: 80%;
        align-items: center;
        gap: 24px;
    }

    .general {
        margin-right: 2%;
        width: 10%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 24px;
    }

    .navbar .btn {
        text-decoration: none;
        background-color: var(--btn-primary);
        padding: 1px 20%;
        overflow: visible;
        color: white !important;
    }


</style>