<script>
    import {page} from "$app/stores";
    import {onMount} from "svelte";
    import {shortcut} from "./shortcut.js";

    let voices = [];
    let selectedVoice;

    onMount(() => {
        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
            selectedVoice = voices[0];
        };
    })


    function readText() {
        let spokenText = window.getSelection().toString();

        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(spokenText);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.voice = selectedVoice;
        utterance.volume = 1;
        speechSynthesis.speak(utterance);
    }
</script>
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
<body use:shortcut={{control: true, alt: true, code: 'KeyS', callback: () => readText()}}>
<main>
    <div class="navbar">
        <div class="pages">
            <a href="/"><img src="logo.png" alt="logo"></a>
            <a class:selected="{$page.url.pathname === '/'}" href="/">Home</a>
            <a class:selected="{$page.url.pathname === '/about'}" href="/about">About</a>
            <a class:selected="{$page.url.pathname === '/pricing'}" href="/pricing">Pricing</a>
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

<button on:click={() => readText()} class="floating-icon"><img alt="speak" src="text-options/speak.png">
</button>

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

    .floating-icon {
        position: fixed;
        bottom: 10px;
        right: 10px;
        width: 5em;
        height: 5em;
        background-color: #7D7DF7;
        border-radius: 100%;
        border: none;
        box-shadow: 0 0 15px 3px black;
    }

    .floating-icon:hover {
        background-color: #6868d3;

    }

    .floating-icon > img {
        width: 100%; /* or any custom size */
        height: 100%;
        object-fit: contain;
    }

</style>