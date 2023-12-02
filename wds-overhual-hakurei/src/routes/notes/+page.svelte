<script>
    import TextOptions from "./TextOptions.svelte";
</script>

<TextOptions/>
<div class="notes_main">
    <div class="sidebar">
        <div class="top">
            <span>Files</span>
            <button class="add_file">+</button>
        </div>
        <div class="files">
        </div>
    </div>
    <div class="notes">
        <textarea name="writing" cols="30" rows="10" class="writing">
</textarea>
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
        padding: 24px;
    }

    .sidebar > .top {
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        border-bottom: 1px solid var(--border);
        padding-bottom: 16px;
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

    .files > button {
        width: 80%;
        height: 28px;
        font-size: 20px;
    }
</style>