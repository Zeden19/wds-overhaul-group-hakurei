<script>
    import "$lib/script.js";
</script>


<div class="main">
    <div class="head">
        <div class="title">
            <img src="link.png"/>
            <span class="title"> Missions</span>
        </div>

        <div class="plans">
            <div class="plan">

                <h3>At InkLink our missions are:</h3>
                <ul>
                    <li>
                        <b>Accessibility: <img alt="accessibility" width="25px" height="25px" src="accessibility.png"></b>
                    </li>
                    <p>Accommodating a range of disabilities such as ADHD to visual disabilities,
                        hearing disabilities, mental disabilities and more</p>

                    <li>
                        <b>User-Friendliness/Convenience: <img alt="convenience" width="25px" height="25px" src="convenience.png"> </b>
                    </li>
                    <p>Allowing any user to quickly jump in with ease and satisfaction</p>

                    <li>
                        <b>Breaking Down Barriers: <img alt="barriers" width="25px" height="25px" src="barriers.png"> </b>
                    </li>
                    <p>Making education more accessible worldwide</p>
                </ul>

            </div>
        </div>
    </div>
    <img alt="phone-demo" src="phone-demo.png" class="phone"/>
    <img alt="splash-imgage" src="splash-img.png" class="splash"/>
</div>
<span class="copy">Copyright © 2023, Western Developers Society </span>

<style>
    @import "$lib/style.css";

    h3 {
        margin-block: 10px;
        text-align: left;
    }

    p {
        margin-left: 50px;
        text-align: left;
        margin-block-end: 0;
        margin-block-start: 0;
        font-size: 14px;
        margin-bottom: 20px;
    }

    ul {
        text-align: left;
    }

    .plans {
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        background-color: #F1F1F1;
        padding: 10px;
        width: 100%;
    }

    .plan {
        margin: 5px;
        background-color: white;
        padding: 20px;
        z-index: 20;
        text-align: center;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    ul {
        padding-inline-start: 10px;
    }

    img {
        vertical-align: middle;
    }

    li {
        display: flex;
        font-size: 20px;
        color: #505F98;
        text-align: left;
        align-items: center;
        margin: 5px 0;
        line-height: 30px;
        list-style: none;
    }

    li:before {
        display: block;
        flex-shrink: 0;
        width: 33px;
        height: 33px;
        margin-right: 10px;

        background: url("https://cdn-icons-png.flaticon.com/512/711/711239.png") no-repeat left center;
        background-size: contain;

        content: '';
    }
</style>