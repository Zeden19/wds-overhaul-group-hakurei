<div class="text-options">
    <div class="text-options-start">
        <img width="40px" height="40px" alt="plus-icon" src="text-options/plus.png">
        <div class="three-dots"></div>
        <img width="40px" height="40px" src="text-options/house.png">
    </div>

    <div class="text-options-middle">
        <p class="T">T</p>
        <img width="50px" height="50px" src="text-options/redo.png">
        <img width="50px" height="50px" src="text-options/undo.png">
        <img width="50px" height="50px" src="text-options/pen.png">
        <img width="50px" height="50px" src="text-options/highlight.png">
        <img width="50px" height="50px" src="text-options/eraser.png">
        <img width="55px" height="55px" src="text-options/protractor.png">
    </div>

    <div class="text-options-end">
        <img width="45px" height="45px" src="text-options/search.png">
        <img width="45px" height="45px" src="text-options/copy.png">
        <img width="45px" height="45px" src="text-options/microphone.png">
        <img width="45px" height="45px" src="text-options/share.png">
        <img width="45px" height="45px" src="text-options/settings.png">
    </div>

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
    }

    .text-options > .text-options-middle {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 5px;
        color: white;
        width: 30%;
    }

    .T {
        font-weight: bold;
        font-size: 50px;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    .text-options-end {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 5px;
        width: 20%;
        justify-content: space-between;
        justify-self: flex-end;
        gap: 5px;
    }
</style>