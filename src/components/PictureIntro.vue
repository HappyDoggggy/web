<script>
export default {
    name: 'PictureIntro',
    data() { // data = funtion(){}
        return {
        }
    },
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        textOne: {
            type: String,
            required: true
        },
        textTwo: {
            type: String,
            required: true
        },
        textThree: {
            type: String,
            required: true
        },
        textFour: {
            type: String,
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
        this.serviceIconAnimation(document.querySelector(".content_text_title"))
        this.serviceIconAnimation(document.querySelector(".content_text_intro"))
    }
}
</script>

<template>
    <div class="content">
        <img class="content_picture" :src="imgSrc" alt="">
        <div class="content_text">
            <div class="content_text_title">
                <h2 class="content_text_title_h2">{{ this.textOne }}</h2>
                <h3 class="content_text_title_h3">{{ this.textTwo }}</h3>
            </div>
            <div class="content_text_intro">
                <p class="content_text_intro_p1">{{ this.textThree }}</p>
                <p class="content_text_intro_p2">{{ this.textFour }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content {
    width: 100%;
    height: 100%;
    position: relative;

    .content_picture {
        position: absolute;
        left: 30%;
        margin-top: 5%;
        max-width: 100%;
    }

    .content_text {
        width: 40%;
        height: 50%;
        background-color: white;
        border-radius: 20pt;
        position: absolute;
        left: 15%;
        bottom: -20%;

        &::before {
            content: "";
            position: absolute;
            width: 30px;
            height: 5px;
            background-color: #000;
            left: 10%;
            top: 38%;
        }

        .content_text_title {
            margin-top: 6%;
            margin-left: 10%;
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);

            .content_text_title_h2 {
                font-size: 2rem;
            }

            .content_text_title_h3 {
                color: #B09D6B;
            }

        }

        .content_text_intro {
            margin-top: 8%;
            margin-left: 10%;
            margin-right: 10%;
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);

            .content_text_intro_p2 {
                margin-top: 3%;
            }
        }

        .anime {
            opacity: 1;
            transform: translateZ(0);
        }
    }

}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .content {
        height: 71%;

        .content_picture {
            max-width: 100%;
            left: 0;
        }

        .content_text {
            width: 100%;
            left: 0;
            border-radius: 0;
            bottom: -20%;

            &::before {
                top: 85px;
                width: 20px;
                height: 3px;
            }

            .content_text_title {

                .content_text_title_h2 {
                    font-size: 1.2rem;
                }

                .content_text_title_h3 {
                    font-size: 0.7rem;
                }

            }
        }

        .content_text_intro {
            .content_text_intro_p1 {
                font-size: 0.7rem;
                margin-top: 15%;
            }

            .content_text_intro_p2 {
                font-size: 0.7rem;
            }
        }

    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .content {
        .content_picture {
            max-width: 100%;
            left: 0;
        }

        .content_text {
            width: 100%;
            left: 0;

            &::before {
                left: 10%;
                top: 34%;
            }

            .content_text_title {

                .content_text_title_h2 {
                    font-size: 2.2rem;
                }

                .content_text_title_h3 {
                    font-size: 1.2rem;
                }

            }

            .content_text_intro {
                font-size: 1.2rem;
            }
        }
    }
}
</style>