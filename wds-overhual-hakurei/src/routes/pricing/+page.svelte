<script>
    import "$lib/script.js";
</script>


<div class="main">
    <div class="head">
        <div class="title">
            <img alt="link-logo" src="link.png"/>
            <span class="title"> Plans & Pricing</span>
        </div>

        <div class="plans">
            <div class="plan">

                <h2>Basic</h2>
                <h2>Free</h2>
                <ul>
                    <li>
                        Simple, easy-to-use, and completely free!
                    </li>

                    <li>
                        Accessible voice to text feature
                    </li>

                    <li>
                        Basic note functions and features included!
                    </li>
                </ul>

                <button>Get Started!</button>
            </div>

            <div class="plan">
                <h2>Premium</h2>
                <h2>$0.99/month</h2>
                <ul>
                    <li>
                        Unlimited notes, colors and edits
                    </li>

                    <li>
                        Math and physics help feature
                    </li>

                    <li>
                        Sync to cloud with convenience and ease
                    </li>
                </ul>

                <button >Get Started!</button>
            </div>
        </div>


    </div>
    <img src="phone-demo.png" class="phone"/>
    <img src="splash-img.png" class="splash"/>
</div>
<span class="copy">Copyright © 2023, Western Developers Society </span>

<style>
    @import "$lib/style.css";

    h2 {
        margin-block: 10px;
    }

    .plans {
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        background-color: #F1F1F1;
        padding: 10px
    }

    .plan {
        margin: 5px;
        background-color: white;
        padding: 20px;
        z-index: 20;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .plan > h2:nth-child(2) {
        color: #7B7B7B;
    }

    ul {
        padding-inline-start: 10px;
    }

    li {
        font-size: 16px;
        color: #505F98;
        text-align: left;
        /*list-style-type: armenian;*/

        display: flex;
        align-items: center;
        margin: 15px 0;

        line-height: 30px;

        list-style: none;
    }

    li:before {
        display: block;
        flex-shrink: 0;
        width: 33px;
        height: 33px;

        vertical-align: middle;
        margin-right: 10px;

        background: url("https://cdn-icons-png.flaticon.com/512/711/711239.png") no-repeat left center;
        background-size: contain;

        content: '';
    }

    button {
        display: inline-block;
        align-self: center;
        justify-self: flex-end;
        margin-top: auto;
        background-color: #111b47;
        color: white;
        width: 80%;
        height: 3em;
        font-size: 16px;
        cursor: pointer;
        border: none;
    }

    button:hover {
        font-weight: 600;
    }


</style>