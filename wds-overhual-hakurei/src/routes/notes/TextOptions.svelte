<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function callSpeak() {
        dispatch('speak');
    }
    function callSpeechRecognition() {
        dispatch('speechRecognition')
    }
    export let dialog;
</script>

<div class="text-options">
    <div class="text-options-start">
        <button><img width="40px" height="40px" alt="plus-icon" src="text-options/plus.png"></button>
        <button class="three-dots"></button>
        <button><img alt="house" width="40px" height="40px" src="text-options/house.png"></button>
    </div>

    <div class="text-options-middle">
        <button class="T">T</button>
        <button><img alt="search" width="45px" height="45px" src="text-options/search.png"></button>
        <button><img alt="redo" width="50px" height="50px" src="text-options/redo.png"></button>
        <button><img alt="undo" width="50px" height="50px" src="text-options/undo.png"></button>

    </div>

    <div class="text-options-latter">
        <button><img alt="pen" width="50px" height="50px" src="text-options/pen.png"></button>
        <button><img alt="highlight" width="50px" height="50px" src="text-options/highlight.png"></button>
        <button><img alt="eraser" width="50px" height="50px" src="text-options/eraser.png"></button>
        <button><img alt="protractor" width="55px" height="55px" src="text-options/protractor.png"></button>
    </div>

    <div class="text-options-end">
        <button><img alt="copy" width="45px" height="45px" src="text-options/copy.png"></button>
        <button on:click={() => callSpeechRecognition()}><img alt="microphone" width="45px" height="45px" src="text-options/microphone.png"></button>
        <button on:click={() => callSpeak()}><img alt="speak" class="speak" width="45px" height="45px"
                                                  src="text-options/speak.png"></button>
        <button on:click={() => dialog.showModal()}><img alt="share" width="45px" height="45px"
                                                         src="text-options/share.png"></button>
        <button><img alt="settings" width="45px" height="45px" src="text-options/settings.png"></button>
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

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    .btn {
        margin-top: 10px;
        background-color: black;
    }


</style>