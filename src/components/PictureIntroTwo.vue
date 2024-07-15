<script>
export default {
    name: 'PictureIntro',
    data() { // data = funtion(){}
        return {
        }
    },
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
    mounted() {
        this.serviceIconAnimation(document.querySelector(".content_text_title_1"))
        this.serviceIconAnimation(document.querySelector(".content_text_intro_1"))
    },
}
</script>

<template>
    <div class="content">
        <div class="pic">
            <img class="content_picture" v-for="item in picArr" :src="item" alt="">
        </div>

        <div class="content_text">
            <div class="content_text_title_1">
                <h2 class="content_text_title_h2">{{ this.text1 }}</h2>
                <h3 class="content_text_title_h3">{{ this.text2 }}</h3>
            </div>
            <div class="content_text_intro_1">
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
        max-width: 100%;

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
        // position: relative;
        left: 18%;
        bottom: -20%;

        &::before {
            content: "";
            position: absolute;
            width: 30px;
            height: 5px;
            background-color: #000;
            left: 10%;
            top: 43%;
        }

        .content_text_title_1 {
            margin-top: 4%;
            margin-left: 10%;
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);
            transform: translateY(20px);

            .content_text_title_h2 {
                font-size: 2rem;
            }

            .content_text_title_h3 {
                color: #B09D6B;
            }

        }

        .content_text_intro_1 {
            margin-top: 4%;
            margin-left: 10%;
            margin-right: 10%;
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);
            transform: translateY(20px);

            .content_text_intro_p2 {
                margin-top: 3%;
            }
        }

        .anime {
            opacity: 1;
            transform: translateZ(0);
            transform: translateY(0);
        }
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

            &::before {
                top: 75px;
                width: 20px;
                height: 3px;
            }

            .content_text_title_1 {
                .content_text_title_h2 {
                    font-size: 1.2rem;
                }

                .content_text_title_h3 {
                    font-size: 0.7rem;
                }
            }

            .content_text_intro_1 {
                margin-top: 40px;

                .content_text_intro_p1 {
                    font-size: 0.7rem;
                }

                .content_text_intro_p2 {
                    font-size: 0.7rem;
                }
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
            bottom: -5%;

            &::before {
                top: 28%;
            }

            .content_text_intro_1 {
                margin-top: 60px;
            }
        }

    }

}
</style>