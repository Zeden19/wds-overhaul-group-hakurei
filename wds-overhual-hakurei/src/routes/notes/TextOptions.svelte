<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function callSpeak() {
        dispatch('speak');
    }

    export let dialog;
</script>

<div class="text-options">
    <div class="text-options-start">
        <img width="40px" height="40px" alt="plus-icon" src="text-options/plus.png">
        <div class="three-dots"></div>
        <img width="40px" height="40px" src="text-options/house.png">
    </div>

    <div class="text-options-middle">
        <p class="T">T</p>
        <img width="45px" height="45px" src="text-options/search.png">
        <img width="50px" height="50px" src="text-options/redo.png">
        <img width="50px" height="50px" src="text-options/undo.png">

    </div>

    <div class="text-options-latter">
        <img width="50px" height="50px" src="text-options/pen.png">
        <img width="50px" height="50px" src="text-options/highlight.png">
        <img width="50px" height="50px" src="text-options/eraser.png">
        <img width="55px" height="55px" src="text-options/protractor.png">
    </div>

    <div class="text-options-end">
        <img width="45px" height="45px" src="text-options/copy.png">
        <img width="45px" height="45px" src="text-options/microphone.png">
        <img class="speak" on:click={() => callSpeak()} width="45px" height="45px" src="text-options/speak.png">
        <img width="45px" on:click={() => dialog.showModal()} height="45px" src="text-options/share.png">
        <img width="45px" height="45px" src="text-options/settings.png">
    </div>

    <dialog bind:this={dialog}>
        <h2>Sharing</h2>

        <form>
            <p>Please select which people this note applies to:</p>
            <input type="radio">Blind
            <input type="radio">Deaf
            <input type="radio">Mute
        </form>

        <p>Here is your link:</p>
        <a href="/">https://InLink/notes/19127ohcaowye92qnhahdia</a>
        <p></p>

        <button class="btn" on:click={dialog.close()}>Close</button>
    </dialog>
</div>

<style>
    .text-options {
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: row;
        overflow: visible;
        background-color: black;
        justify-content: space-between;
        color: white;
    }

    .three-dots {
        width: 50px;
        height: 50px;
        background-image: radial-gradient(circle, white 3px, transparent 4px);
        background-size: 100% 33.33%;
    }

    .text-options > .text-options-start {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 5px;
        width: 10%;
        justify-content: space-between;
        cursor: pointer;
    }

    .text-options > .text-options-middle {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 5px;
        color: white;
        width: 17%;
        gap: 10px;
        cursor: pointer;
    }

    .T {
        font-weight: bold;
        font-size: 50px;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    .text-options > .text-options-latter {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 5px;
        color: white;
        width: 17%;
        gap: 10px;
        cursor: pointer;
    }

    .text-options-end {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 5px;
        width: 22%;
        justify-content: space-between;
        justify-self: flex-end;
        gap: 5px;
        cursor: pointer;
    }

    .text-options-end > *:hover,
    .text-options-start > *:hover,
    .text-options-middle > *:hover,
    .text-options-latter > *:hover {
        filter: brightness(0.7);
    }

    dialog {
        border: black 5px solid;
        background: white;
    }


</style>