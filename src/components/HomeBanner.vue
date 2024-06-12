<script>
</script>

<template>
    <div class="homeBanner_main">
        <div class="homeBanner_main_block">
            <p class="homeBanner_main_Text1 text">THE BEST</p>
            <p class="homeBanner_main_Text2 text">ONE-STOP SERVICE.</p>
        </div>
        <div class="homeBanner_mainPic">
            <img src="../../public/home.jpg" alt="">
        </div>
        <div class="homeBanner_main_info_block">
            <p class="homeBanner_main_title">おもてなし</p>
            <p class="homeBanner_main_title_en">hospitality</p>
            <p class="homeBanner_main_content1">私たちが目指すのは、お客様に感動を提供し、社会の発展に貢献できる企業です。</p>
            <p class="homeBanner_main_content2">私たちは外国人向けの不動産を提供するインバウンド不動産を盛り上げ、お客様と関連事業者とＹＡＫのwin- win -win
                関係を構築していきたいです。</p>
            <div class="homeBanner_link_block">
                <div class="homeBanner_link_text_block">
                    <p class="homeBanner_link_text">会社案内</p>
                    <p class="homeBanner_link_text_en">ABOUT US</p>
                </div>
                <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
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
    }

    .homeBanner_main_block {
        width: 100%;
        height: 15%;
        position: relative;

        .text {
            font-size: 5rem;
            font-weight: bold;
            margin-left: 5%;
        }

        .homeBanner_main_Text1 {
            margin-top: 1%;
        }

        .homeBanner_main_Text2 {
            margin-top: 1%;
        }

    }

    .homeBanner_mainPic {
        position: absolute;
        width: 70%;
        height: 50%;
        right: 0;
        z-index: -1;

        &::before {
            content: 'JRC';
            position: absolute;
            top: 65%;
            left: -26%;
            color: #BAA97D;
            writing-mode: vertical-rl;
        }
    }

    .homeBanner_main_info_block {
        width: 50%;
        height: 25%;
        background-color: white;
        position: absolute;
        left: 15%;
        bottom: 20%;
        border-radius: 25px;

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

        .homeBanner_link_block {
            display: flex;
            margin-top: 12%;
            margin-left: 60%;

            .homeBanner_link_text_block {
                .homeBanner_link_text {
                    font-weight: bold;
                    font-size: 1.2rem;
                }

                .homeBanner_link_text_en {
                    font-weight: bold;
                    font-size: 0.7rem;
                    color: #BAA97D;
                }
            }

            .fa-solid {
                margin-top: 3%;
                margin-left: 3%;
                font-size: 1.3rem;
                color: #BAA97D;
            }
        }

    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .homeBanner_main {
        height: 100%;
        width: 100%;
        position: relative;

        &::before {
            display: none;
        }

        .homeBanner_main_block {
            height: 0%;

            .homeBanner_main_Text1 {
                font-size: 2rem;
                margin-top: 8%;
            }

            .homeBanner_main_Text2 {
                font-size: 2rem;
                margin-top: 0%;
            }
        }

        .homeBanner_mainPic {
            position: absolute;
            left: 0;
            top: 10%;
            z-index: -1;

            img {
                width: 145%;
                height: 80%;
            }

            &::before {
                display: none;
            }
        }

        .homeBanner_main_info_block {
            width: 100%;
            height: 25%;
            background-color: white;
            position: absolute;
            left: 0;
            bottom: 30%;
            border-radius: 25px;

            .homeBanner_link_block {
                margin-left: 40%;

                .homeBanner_link_text_block {
                    .homeBanner_link_text {
                        font-size: 1rem;
                    }

                    .homeBanner_link_text_en {
                        font-size: 0.5rem;
                    }
                }

                .fa-solid {
                    font-size: 1rem;
                }
            }

            .homeBanner_main_title {
                font-size: 1.5rem;
            }

            .homeBanner_link_text_en {
                font-size: 0.4rem;
            }

            .homeBanner_main_content1 {
                font-size: 0.6rem;
            }

            .homeBanner_main_content2 {
                font-size: 0.6rem;
            }
        }

    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .homeBanner_main {
        height: 100%;
        width: 100%;
        position: relative;

        &::before {
            display: none;
        }

        .homeBanner_mainPic {
            position: absolute;
            left: 0;
            z-index: -1;

            img {
                width: 145%;
                height: 80%;
            }

            &::before {
                display: none;
            }
        }

        .homeBanner_main_info_block {
            width: 100%;
            height: 25%;
            background-color: white;
            position: absolute;
            left: 0;
            bottom: 20%;
            border-radius: 25px;

            .homeBanner_link_block {
                margin-left: 43%;
            }
        }
    }
}
</style>