<script>
</script>

<template>
    <div class="homeBanner_main">
        <div class="homeBanner_main_block">
            <p class="homeBanner_main_Text1 text">THE BEST</p>
            <p class="homeBanner_main_Text2 text">ONE-STOP SERVICE.</p>
        </div>
        <img src="../../public/home.jpg" alt="" class="homeBanner_mainPic">
        <p class="homeBanner_jrc">JRC</p>
        <div class="homeBanner_main_info_block">
            <p class="homeBanner_main_title">おもてなし</p>
            <p class="homeBanner_main_title_en">hospitality</p>
            <p class="homeBanner_main_content1">私たちが目指すのは、お客様に感動を提供し、社会の発展に貢献できる企業です。</p>
            <p class="homeBanner_main_content2">私たちは外国人向けの不動産を提供するインバウンド不動産を盛り上げ、お客様と関連事業者とＹＡＫのwin- win -win
                関係を構築していきたいです。</p>
        </div>
        <div class="homeBanner_link_block">
            <div class="homeBanner_link_text_block">
                <p class="homeBanner_link_text">会社案内</p>
                <p class="homeBanner_link_text_en">ABOUT US</p>
            </div>
            <i class="fa-solid fa-circle-arrow-right"></i>
        </div>
    </div>
</template>

<style scoped lang="scss">
.homeBanner_main {
    width: 100%;
    height: 100%;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 22%;
        left: 12.5%;
        width: 0.1%;
        height: 20%;
        background-color: #BAA97D;
        z-index: 1; 
        
    }
    .homeBanner_main_block {
        width: 100%;
        height: 15%;
        position: relative;

        .text {
            position: absolute;
            z-index: 5;
            font-size: 5rem;
            font-weight: bold;
            margin-left: 10%;
        }

        .homeBanner_main_Text1 {
            position: absolute;
            top: 10%;
        }

        .homeBanner_main_Text2 {
            position: absolute;
            top: 65%;
        }
    }

    .homeBanner_mainPic {
        position: relative;
        width: 75%;
        height: 55%;
        left: 25%;
        z-index: 3;
    }

    .homeBanner_jrc {
        position: absolute;
        color: #BAA97D;
        writing-mode: vertical-lr;
        font-weight: bold;
        font-size: 1.2rem;
        left: 12%;
        top: 45%;
    }

    .homeBanner_main_info_block {
        width: 50%;
        height: 25%;
        background-color: white;
        position: absolute;
        left: 15%;
        bottom: 20%;
        z-index: 4;

        .homeBanner_main_title {
            font-size: 2.2rem;
            font-weight: bold;
            margin-top: 10%;
            margin-left: 5%;
        }

        .homeBanner_main_title_en {
            font-size: 0.9rem;
            margin-left: 6%;
            margin-top: -1%;
        }

        .homeBanner_main_content1 {
            font-size: 1rem;
            margin-top: 4%;
            margin-left: 6%;
            margin-right: 10%;
        }

        .homeBanner_main_content2 {
            font-size: 1rem;
            margin-top: 4%;
            margin-left: 6%;
            margin-right: 10%;
        }
    }

    .homeBanner_link_block {
        display: flex;
        margin-top: 15%;
        margin-left: 50%;
        .homeBanner_link_text_block {
            .homeBanner_link_text {
                font-weight: bold;
            }
            .homeBanner_link_text_en {
                margin-top: 6%;
                font-weight: bold;
                font-size: 0.5rem;
                color: #BAA97D;
            }
        }

        .fa-solid {
            margin-top: 1.5%;
            margin-left: 2%;
            font-size: 1.3rem;
            color: #BAA97D;
        }
    }
}
</style>