<script>
    import TextOptions from "./TextOptions.svelte";
    import {onMount} from "svelte";
    import File from "./File.svelte";

    let voices = [];
    let selectedVoice;
    onMount(() => {
        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
            selectedVoice = voices[0];
        };

    });

    let today = new Date();
    export let files = [
        {
            title: "First Note",
            date: today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate(),
            time: today.getHours() + ":" + today.getMinutes(),
            content: "The first of many notes!",
            id: 0
        },
        {
            title: "Second Note",
            date: today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate(),
            time: today.getHours() + ":" + today.getMinutes(),
            content: "The second of many notes!",
            id: 1
        }
    ]
    let text = files[0].content;
    let fileId = 0

    function newNote() {
        today = new Date();
        files.push({
            title: "New Note", date: today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate(),
            time: today.getHours() + ":" + today.getMinutes(),
            id: files[files.length - 1].id + 1
        })

        files = files;
    }

    function play() {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.voice = selectedVoice;
        utterance.volume = 1;
        speechSynthesis.speak(utterance);
    }

    function setFileContent(content) {
        files[fileId].content = content
    }
</script>
<TextOptions on:speak={() => play()}/>
<div class="notes_main">
    <div class="sidebar">
        <div class="top">
            <span>Files</span>
            <button on:click={() => newNote()} class="add_file">+</button>
        </div>
        <div class="files">
            {#each files as {title, date, time, content, id}}
                <File title="{title}" date="{date}" time="{time}" content="{content}" id="{id}" bind:fileId bind:text/>
            {/each}
        </div>
    </div>
    <div class="notes">
        <textarea bind:value={text} on:change={() => setFileContent(text)} name="writing" cols="30" rows="10" class="writing"></textarea>
    </div>
</div>

<style>
    @import "$lib/style.css";

    .notes_main {
        display: flex;
        height: calc(100vh - 67px);
    }

    .sidebar {
        height: calc(100% - 48px);
        width: 20%;
        border-right: 1px solid var(--border);
    }

    .sidebar > .top {
        display: flex;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 7%;
        font-family: Inter sans-serif;
        box-shadow: 0 4px 2px -2px grey;
        font-size: 20px;
        justify-content: space-between;
        border-bottom: 1px solid var(--border);
        font-style: italic;
    }

    .add_file {
        background: transparent;
        border: none;
        font-size: 30px;
    }

    .add_file:hover {
        background: rgba(126, 125, 125, 0.20);
    }

    .notes {
        width: 80%;
        height: 100%;
        background-image: linear-gradient(0deg, var(--border) 5%, #ffffff 5%, #ffffff 100%);
        background-size: 28px 28px;
    }

    .writing {
        resize: none;
        background: transparent;
        width: 90%;
        margin: 0 0 0 10%;
        height: calc(100% - 2px);
        border: none;
        border-left: 1px solid red;
        outline: none;
        line-height: 28px;
        font-size: 20px;
    }

    .files {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 12px;
        align-items: center;
        padding: 12px 0;
    }
</style>