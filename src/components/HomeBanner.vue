<script>
export default {
    //語法糖
    name: 'Home',
    data() { // data = funtion(){}
        return {
        }
    },
    methods: {
        serviceIconAnimation(target) {
        const option = {
            threshold: 0.5
        };
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                target.classList.add("anime");
            }
        };
        const observer = new IntersectionObserver(callback, option);
        observer.observe(target);
    },
    },
    components: {
    },
    mounted() {
        this.serviceIconAnimation(document.querySelector(".homeBanner_main_title"))
        this.serviceIconAnimation(document.querySelector(".homeBanner_main_title_en"))
        this.serviceIconAnimation(document.querySelector(".homeBanner_main_content1"))
        this.serviceIconAnimation(document.querySelector(".homeBanner_main_content2"))
    }
}
</script>

<template>
    <div class="homeBanner_main">
        <div class="homeBanner_main_block">
            <p class="homeBanner_main_Text1 text enWord">THE BEST</p>
            <p class="homeBanner_main_Text2 text enWord">ONE-STOP SERVICE.</p>
        </div>
        <div class="homeBanner_mainPic">
            <img src="../../public/home.jpg" alt="">
        </div>
        <div class="homeBanner_main_info_block">
            <p class="homeBanner_main_title">おもてなし</p>
            <p class="homeBanner_main_title_en enWord">hospitality</p>
            <p class="homeBanner_main_content1">私たちが目指すのは、お客様に感動を提供し、社会の発展に貢献できる企業です。</p>
            <p class="homeBanner_main_content2">私たちは外国人向けの不動産を提供するインバウンド不動産を盛り上げ、お客様と関連事業者とＹＡＫのwin- win -win
                関係を構築していきたいです。</p>
            <div class="homeBanner_link_block">
                <div class="homeBanner_link_text_block">
                    <p class="homeBanner_link_text">会社案内</p>
                    <p class="homeBanner_link_text_en enWord">ABOUT US</p>
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
            font-size: 5.6rem;
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
        width: 80%;
        height: 60%;
        right: 0;
        z-index: -1;

        img {
            width: 100%;
            height: 100%;
        }

        &::before {
            content: 'JRC';
            position: absolute;
            top: 370px;
            left: -120px;
            color: #BAA97D;
            writing-mode: vertical-rl;
        }
    }

    .homeBanner_main_info_block {
        width: 50%;
        height: 15%;
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
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);
            transform: translateY(20px);
        }

        .homeBanner_main_title_en {
            font-size: 0.9rem;
            margin-left: 6%;
            margin-top: -1%;
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);
            transform: translateY(20px);
        }

        .homeBanner_main_content1 {
            font-size: 1rem;
            margin-top: 4%;
            margin-left: 6%;
            margin-right: 10%;
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);
            transform: translateY(20px);
        }

        .homeBanner_main_content2 {
            font-size: 1rem;
            margin-top: 4%;
            margin-left: 6%;
            margin-right: 10%;
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);
            transform: translateY(20px);
        }

        .anime {
            opacity: 1;
            transform: translateZ(0);
            transform: translateY(0);
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
            top: 12%;
            z-index: -1;

            img {
                width: 120%;
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
            border-radius: 0px;

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
                margin-top: 5%;
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
            top: 13%;

            img {
                width: 125%;
                height: 80%;
            }

            &::before {
                display: none;
            }
        }

        .homeBanner_main_block {
            margin-top: 5%;

            .homeBanner_main_Text1 {
                font-size: 4rem;
            }

            .homeBanner_main_Text2 {
                font-size: 4rem;
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

                .homeBanner_link_text_block {
                    .homeBanner_link_text {
                        font-size: 1.6rem;
                    }

                    .homeBanner_link_text_en {
                        font-size: 1rem;
                    }
                }

                .fa-solid {
                    font-size: 1.6rem;
                }
            }

            .homeBanner_main_title {
                margin-top: 5%;
                font-size: 2.5rem;
            }

            .homeBanner_main_title_en {
                font-size: 1.2rem;
            }

            .homeBanner_main_content1 {
                font-size: 1.4rem;
            }

            .homeBanner_main_content2 {
                font-size: 1.4rem;
            }
        }
    }
}
</style>