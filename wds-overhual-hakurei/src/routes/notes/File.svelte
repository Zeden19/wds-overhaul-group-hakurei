<script>
    export let title;
    export let date;
    export let time;
</script>

<div class="file-rectangle">
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
        width: 92%;
        height: 30%;
        justify-content: space-between;
    }

    .file-rectangle:hover {
        background-color: #60c5ff;
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