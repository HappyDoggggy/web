<script>
export default {
    name: 'PictureIntro',
    props: {
        text1: {
            type: String,
            required: true
        },
        text2: {
            type: String,
            required: true
        },
        text3: {
            type: String,
            required: true
        },
        text4: {
            type: String,
            required: true
        },
        picArr: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <div class="content">
        <div class="pic">
            <img class="content_picture" v-for="item in picArr" :src="item" alt="">
        </div>

        <div class="content_text">
            <div class="content_text_title">
                <h2 class="content_text_title_h2">{{ this.text1 }}</h2>
                <h3 class="content_text_title_h3">{{ this.text2 }}</h3>
            </div>
            <div class="content_text_intro">
                <p class="content_text_intro_p1">{{ this.text3 }}</p>
                <p class="content_text_intro_p2">{{ this.text4 }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content {
    width: 100%;
    height: 100%;
    position: relative;


    .pic {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        .content_picture {
            width: 30%;
            height: 100%;
            margin-top: 5%;
            object-fit: cover;
        }
    }

    .content_text {
        width: 80%;
        height: 50%;
        background-color: white;
        border-radius: 20pt;
        position: absolute;
        left: 18%;
        bottom: -20%;

        .content_text_title {
            margin-top: 4%;
            margin-left: 10%;

            .content_text_title_h2 {
                font-size: 2rem;
            }

            .content_text_title_h3 {
                color: #B09D6B;
            }

        }

        .content_text_intro {
            margin-top: 4%;
            margin-left: 10%;
            margin-right: 10%;

            .content_text_intro_p2 {
                margin-top: 3%;
            }
        }
    }

    .content_text_title::before {
        content: "";
        position: absolute;
        width: 3%;
        height: 2%;
        background-color: #000;
        left: 11.5%;
        transform: translateX(-50%);
        bottom: 57%;
    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .content {
        height: 80%;
        .pic {
            align-items: normal;
            .content_picture {
                width: 33%;
                height: 100%;
            }
        }

        .content_text {
            width: 100%;
            left: 0;
            bottom: -29%;
            border-radius: 0;

            .content_text_title {
                .content_text_title_h2 {
                    font-size: 1.2rem;
                }

                .content_text_title_h3 {
                    font-size: 0.7rem;
                }
            }

            .content_text_intro {
                margin-top: 40px;

                .content_text_intro_p1 {
                    font-size: 0.7rem;
                }

                .content_text_intro_p2 {
                    font-size: 0.7rem;
                }
            }

            .content_text_title::before {
                bottom: 0;
                left: 12.5%;
                top: 80px;
                width: 5%;
                height: 1.5%;
            }
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .content {
        .pic {
            .content_picture {
                width: 30%;
                height: 50%;
            }
        }

        .content_text {
            width: 100%;
            left: 0;

            .content_text_intro {
                margin-top: 60px;
            }
        }

        .content_text_title::before {
            bottom: 71%;
            left: 12.5%;
            width: 5%;
        }
    }

}
</style>