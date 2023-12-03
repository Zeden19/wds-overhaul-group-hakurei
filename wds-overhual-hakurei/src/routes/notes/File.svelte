<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let title;
    export let date;
    export let time;
    export let content;
    export let id;

    export let text;
    export let fileId;

    function setNewNote(content) {
        text = content
        fileId = id
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            setNewNote(content)
        }
    }
</script>

<div role="button" tabindex="0" on:keydown={(key) => handleKeyDown(key)} class:selected={fileId === id}
     on:click|preventDefault={() => setNewNote(content)} class="file-rectangle">
    <div class="title-date">
        <input type="text" class="title" value="{title}">
        <p class="date">{date} - {time}</p>
    </div>
    <div class="three-dots"></div>
</div>


<style>
    .file-rectangle {
        border-radius: 30px;
        display: flex;
        flex-direction: row;
        padding: 10px 8px 8px 10px;
        background-color: #AEE2FF;
        width: 90%;
        height: 30%;
        justify-content: space-between;
        margin-right: 3px;
    }

    .file-rectangle:hover {
        background-color: #60c5ff;
    }

    .selected {
        border: 3px solid black;
        box-shadow: black 2px 2px;
    }

    .title-date {
        margin-top: 5px;
        margin-left: 20px;
    }


    .title {
        font-size: 20px;
        font-weight: bold;
        margin-block-start: 0;
        margin-block-end: 0;
        background: none;
        border: none;
    }

    .date {
        font-size: 13px;
        margin-block-start: 0;
        margin-block-end: 0;

    }

    .three-dots {
        width: 50px;
        height: 50px;
        background-image: radial-gradient(circle, black 3px, transparent 3px);
        background-size: 100% 33.33%;
    }
</style>