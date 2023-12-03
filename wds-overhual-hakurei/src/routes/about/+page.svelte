<script>
    import "$lib/script.js";
</script>


<div class="main">
    <div class="head">
        <div class="title">
            <img alt="link-logo" src="link.png"/>
            <span class="title">About</span>
        </div>

        <div class="about-text">
            <h2>Stephanie Wong</h2>

            <p class="text">Stephanie Wong, a young student who came to Canada in 2005 as a senior high school student,
                constantly
                battled language barriers. She found learning the English language heavily difficult for her due to her
                limited exposure to the language back in her home country. As she attended post-secondary, she realized
                she
                had an exceptional knack for technology and entrepreneurship. Finally, when she graduated, she realized
                she
                had a mission to make learning more accessible for students like her.</p>

            <h2>InkLink</h2>
            <p class="text">“INKLINK” is an innovative note-taking app that focuses on providing not only accessibility
                for
                English Language learners but for anyone who is looking for an accessible learning tool.
                InkLink is driven by two main goals: accessibility and user-friendliness/convenience. It distinguishes
                itself not only by its intuitive interface and features but also InkLink’s ability to accommodate a
                range of
                disabilities from learning disabilities and barriers such as ADHD to visual disabilities, hearing
                disabilities, mental disabilities and more. Stephanie hopes that through developing these two key
                features
                of the site, InkLink can grow their market share and benefit more users with a more accessible
                world.
            </p>

        </div>


    </div>
    <img src="stephanie.png" class="phone stephanie"/>
    <img src="splash-img.png" class="splash"/>
</div>
<span class="copy">Copyright © 2023, Western Developers Society </span>

<style>
    @import "$lib/style.css";

    h2 {
        color: #2540d3;
    }

    .about-text {
        background-color: #F1F1F1;
        padding: 20px;
        z-index: 20;
    }

    .text {
        margin: 10px;
        padding: 10px;
        z-index: 20;
        line-height: 2;
    }

    .stephanie {
        border-radius: 100%;
        position: fixed;
        bottom: 15%;
        right: 5%;
        height: calc(80vh - 128px);
        border: 5px solid black;
    }

</style>