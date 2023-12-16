<script>
    import {createEventDispatcher} from 'svelte';
    import {slide} from "svelte/transition";
    import {enhance} from "$app/forms";

    const dispatch = createEventDispatcher();

    export let title;
    export let date;
    export let content;
    export let id;

    export let text;
    export let fileId;

    let titleForm;
    let deleteNoteForm;
    export let notes;

    let loading = false;

    function setNewNote(content) {
        text = content
        fileId = id
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            setNewNote(content)
        }
    }

    function looseFocusInput(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            event.target.blur();
        }
    }

</script>

<div in:slide={{x: -200}} out:slide={{x:200}} role="button" tabindex="0" on:keydown={(key) => handleKeyDown(key)}
     class:selected={fileId === id} on:click|preventDefault={() => setNewNote(content)} class="file-rectangle">
    <div class="title-date">

        <form method="post" action="?/newNoteTitle" bind:this={titleForm}
              on:focusout={() => titleForm.requestSubmit()}
              use:enhance={() => {
            return async ({update}) => {

                if (notes.find((note) => note.id === id).name === title) return;
                loading = true;
                await update({reset: false})

                loading = false;
                notes.find((note) => note.id === id).name = title;
                notes = notes;

            }
        }}>
            <button type="submit" disabled style="display: none" aria-hidden="true"></button>

            <input on:keydown={(event) => looseFocusInput(event)} autocomplete="off" data-form-type="other"
                   name="title" type="text" class="title" bind:value="{title}">

            <input name="id" type="hidden" value="{id}">
        </form>
        <p class="date">{`${date.toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        })}`}</p>
    </div>

    <form class="trash" bind:this={deleteNoteForm} method="post" action="?/deleteNote" use:enhance={() => {
        return async ({update}) => {
            loading = true;
            await update({reset: false})
            loading = false;
            notes = notes.filter((note) => note.id !== id);
            console.log(notes)
        }
    }}>
        <input name="id" type="hidden" value="{id}">

        <img width="25px" height="25px" alt="trash icon closed" src="trashClosed.png"
             onmouseover="this.src = 'trashOpen.png'"
             onmouseout="this.src = 'trashClosed.png'"
             on:click={() => deleteNoteForm.requestSubmit()}>
    </form>
</div>


<style>
    .file-rectangle {
        border-radius: 30px;
        display: flex;
        flex-direction: row;
        padding: 10px 8px 8px 10px;
        background-color: #AEE2FF;
        width: 90%;
        height: 10%;
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

    .trash {
        align-self: flex-end;
        margin-right: 5px;
    }

    .trash:hover {
        cursor: pointer;
    }
</style>