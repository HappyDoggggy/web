<script>
export default {
    data() { // data = funtion(){}
        return {
        }
    },
    props: {
        mainInfo_text: {
            type: String,
            required: true
        },
        mainInfo_subText: {
            type: String,
            required: true
        },
        mainIntroP_1: {
            type: String,
            required: true
        },
        mainIntroP_2: {
            type: String,
            required: true
        },
        subIntro_1: {
            type: String,
            required: true
        },
        subIntro_2: {
            type: String,
            required: true
        },
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
        this.serviceIconAnimation(document.querySelector(".mainIntro"))
        this.serviceIconAnimation(document.querySelector(".subIntro_5"))
    },
}
</script>

<template>
    <div class="mainInfo_main">
        <div class="circle_block">
            <div class="circle">
                <div class="textArea">
                    <div class="mainInfo_text">{{ this.mainInfo_text }}</div>
                    <div class="mainInfo_subText">{{ this.mainInfo_subText }}</div>
                </div>
            </div>
        </div>
        <div class="mainIntro">
            <p class="mainIntroP_1 mainIntroP 1">{{ this.mainIntroP_1 }}</p>
            <p class="mainIntroP_2 mainIntroP 2">{{ this.mainIntroP_2 }}</p>
        </div>
        <div class="subIntro_5">
            <p class="subIntro_1 subIntro 3">{{ this.subIntro_1 }}</p>
            <p class="subIntro_2 subIntro 4">{{ this.subIntro_2 }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mainInfo_main {
    width: 100%;
    height: 100%;
    position: relative;

    .circle_block {
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;

        .circle {
            width: 35%;
            height: 110%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background-image: url(../../public/cirle.png);
            background-repeat: no-repeat;
            background-position: 50% 0;

            .textArea {
                height: 35%;

                .mainInfo_text {
                    height: 45%;
                    font-size: 2rem;
                    color: #FFFFFF;
                    font-weight: bold;
                    margin: 0 auto;
                }

                .mainInfo_subText {
                    height: 15%;
                    font-size: 0.8rem;
                    color: #BAA97D;
                    margin: 0 auto;
                    text-align: center;
                    margin-top: 20%;
                }
            }

        }

        .circle::before {
            content: "";
            position: absolute;
            width: 2px;
            height: 40%;
            background-color: #BAA97D;
            left: 50%;
            transform: translateX(-50%);
            bottom: -23%;
        }
    }

    .mainIntro {
        margin-top: 9%;
        width: 100%;
        height: 13%;
        text-align: center;
        opacity: 0;
        transition-property: filter, opacity, transform;
        transition-duration: 2s;
        transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
        filter: blur(0);

        .mainIntroP {
            font-size: 1.4rem;
            font-weight: bold;
        }
    }

    .subIntro_5 {
        width: 70%;
        height: 20%;
        margin: auto;
        margin-bottom: 4%;
        opacity: 0;
        transition-property: filter, opacity, transform;
        transition-duration: 2s;
        transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
        filter: blur(0);

        .subIntro {
            font-size: 1.2rem;
        }

        .subIntro_1 {
            margin-top: 5%;
        }

        .subIntro_2 {
            margin-top: 8%;
        }
    }

    .anime {
            opacity: 1;
            transform: translateZ(0);
        }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .mainInfo_main {
        .circle_block {
            .circle {
                width: 55%;
                height: 60%;
                background-size: contain;

                .textArea {
                    text-align: center;
                    margin-bottom: 10%;

                    .mainInfo_text {
                        font-size: 1.1rem;
                        margin-left: 3%;
                        width: 150px;
                        text-align: center;
                    }

                    .mainInfo_subText {
                        font-size: 0.6rem;
                        width: 68px;
                        text-align: center;
                        margin-top: 8%;
                    }
                }
            }

            .circle::before {
                height: 55%;
            }
        }

        .mainIntro {
            margin-top: -5%;
            margin-left: 2%;
            width: 95%;

            .mainIntroP {
                font-size: 1rem;
            }
        }

        .subIntro_5 {
            width: 92%;
            height: 65px;
            margin-top: 10%;

            .subIntro {
                font-size: 0.8rem;

            }

            .subIntro_1 {
                font-size: 0.8rem;
            }
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .mainInfo_main {
        .circle_block {

            .circle {
                background-repeat: no-repeat;
                background-size: contain;
                width: 45%;
                height: 85%;

                .textArea {
                    .mainInfo_text {
                        margin-left: 3%;
                        width: 241px;
                        text-align: center;
                        font-size: 1.8rem;
                    }

                    .mainInfo_subText {
                        width: 52%;
                        text-align: center;
                        font-size: 1rem;
                        margin-top: 8%;
                    }
                }
            }

            .circle::before {
                height: 36%;
                bottom: -25%;
            }
        }

        .mainIntro {
            margin-top: 3%;
            padding: 0px 9%;

            .mainIntroP {
                font-size: 1.4rem;
                font-weight: bold;
            }
        }

        .subIntro_5 {
            width: 87%;
            height: 30%;

            .subIntro {
                margin-top: 5%;
                font-size: 1.2rem;
            }

            .subIntro_1 {
                font-size: 1.2rem;
            }

            .subIntro_2 {
                margin-top: 12%;
            }
        }
    }
}
</style>