<script>
    import TextOptions from "./TextOptions.svelte";
    import {fly} from "svelte/transition";
    import {onMount} from "svelte";
    import {enhance} from "$app/forms";
    import File from "./File.svelte";


    export let data;
    const user = data.user;
    let notes = data.notes;
    export let form;

    let voices = [];
    let selectedVoice;

    let text = notes[0]?.content;
    let fileId = notes[0].id

    let noteContentForm;

    let recognition;

    let noteArea;
    let isBeingEdited = false;
    let loading = false;
    let debounceTimer;

    onMount(() => {
        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
            selectedVoice = voices[0];
        };

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        recognition = new SpeechRecognition();

        recognition.lang = "en-US";
        recognition.interimResults = false;
    });

    function textToSpeech() {
        recognition.start()

        recognition.onresult = (event) => {
            text += " " + event.results[0][0].transcript.charAt(0).toUpperCase() + event.results[0][0].transcript.slice(1) + ".";
        };

        recognition.onspeechend = () => {
            recognition.stop();
        };
    }

    function play() {
        console.log(notes)
        let spokenText = window.getSelection().toString() === "" ? text : window.getSelection().toString()
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(spokenText);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.voice = selectedVoice;
        utterance.volume = 1;
        speechSynthesis.speak(utterance);
    }

    async function copy() {
        try {
            await navigator.clipboard.writeText(text);
        } catch (e) {
            console.log(e)
        }
    }

    async function newNote(name, content) {
        const response = await fetch('/api/addNote', {
            method: "POST",
            body: JSON.stringify({name: name, content: content, id: user.id}),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const results = await response.json()
        notes = [...notes, results[0][0]]

    }

    function submitFormRequest() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            noteContentForm.requestSubmit();
        }, 300);
    }

    $: if (form?.success) {
        setTimeout(() => {
            form = null;
        }, 1000)
    }


</script>

<!--todo's:
add translation
find other way to update local "notes" variable
Add success for loading (and returning success or failure). Errors for speech to text and clipboard needed
adding hovering elements to show success and failure that disappear automatically. include type of success
Consider stop using form request for regular json api-->
<h2>Hello {user.name}</h2>
<TextOptions on:copy={() => copy()} on:speechRecognition={() => textToSpeech()} on:speak={() => play()}/>
<div class="notes_main">
    <div class="sidebar">
        <div class="top">
            <span>Files</span>
            <button on:click={() => newNote("New Note", "Welcome to your new note")} class="add_file">+</button>
        </div>
        <div class="files">
            {#each notes as {id, name, content, created_at}}
                <File {notes} title="{name}" date="{created_at}" content="{content}" id="{id}"
                      bind:fileId bind:text/>
            {/each}
        </div>
    </div>
    <form method="post" bind:this={noteContentForm} action="?/setNoteContent" class="notes"
          use:enhance={() => {
              loading = true;
            return async ({update, result}) => {
                await update({reset: false})
                notes.find((note) => note.id === fileId).content = text;
                notes = notes;
                loading = false;
            }}}>
        <input type="hidden" name="id" value="{fileId}">
        <textarea data-form-type="other" autocomplete="off" name="content" cols="30" rows="10" class="writing"
                  bind:value={text} bind:this={noteArea}
                  on:focusin={() => isBeingEdited = true} on:focusout={() => isBeingEdited = false}
                  autofocus="{isBeingEdited}"
                  on:keyup|preventDefault={() => submitFormRequest()}></textarea>
    </form>

    {#if form?.success}
        <div in:fly={{y:50}} out:fly={{y:50}} class="overlay">
            <span>Successfully saved note {form.type}</span>
        </div>
    {/if}
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
        height: 90%;
        overflow-y: scroll;
        margin-bottom: 20px;
    }

    .overlay {
        position: fixed;
        bottom: 5%;
        left: 50%;
        background-color: #4CAF50; /* Green background color */
        color: #fff; /* Text color */
        padding: 10px 20px;
        border-radius: 10px; /* Rounded corners */
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15); /* Shadow for a pleasing effect */
        z-index: 1000; /* Ensure it appears above other elements */
        transition: opacity 0.3s ease-in-out; /* Optional: Add a transition effect */
    }

    /* Styling for the text inside the overlay */
    .overlay::after {
        content: '';
        display: block;
        clear: both;
    }
</style>