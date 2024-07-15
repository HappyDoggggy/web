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
        this.serviceIconAnimation(document.querySelector(".news_news_date_1"))
        this.serviceIconAnimation(document.querySelector(".news_news_date_2"))
        this.serviceIconAnimation(document.querySelector(".news_news_date_3"))
        this.serviceIconAnimation(document.querySelector(".news_news_info_1"))
        this.serviceIconAnimation(document.querySelector(".news_news_info_2"))
        this.serviceIconAnimation(document.querySelector(".news_news_info_3"))
    }
}
</script>

<template>
    <div class="news_main">
        <div class="news_text_block">
            <p class="news_text">NEWS</p>
        </div>
        <div class="news_news_block">
            <p class="news_news_date_1 date">2024.4.5</p>
            <a href="">
                <p class="news_news_info_1 info">【重要】弊社社員を装って営業活動をするに関する注意喚起について</p>
            </a>
            <p class="news_news_date_2 date">2024.4.5</p>
            <a href="">
                <p class="news_news_info_2 info">【重要】弊社社員を装って営業活動をするに関する注意喚起について</p>
            </a>
            <p class="news_news_date_3 date">2024.4.5</p>
            <a href="">
                <p class="news_news_info_3 info">【重要】弊社社員を装って営業活動をするに関する注意喚起について</p>
            </a>
        </div>
    </div>

</template>

<style scoped lang="scss">
.news_main {
    display: flex;
    position: relative;
    z-index: 2;

    .news_text_block {
        width: 10%;
        height: 10%;
        margin-top: 8%;
        margin-left: 10%;

        .news_text {
            font-size: 2.5rem;
            font-weight: bold;
        }
    }

    .news_news_block {
        width: 55%;
        height: 60%;
        margin-top: 6%;
        margin-left: 13%;

        &::before {
            content: '';
            position: absolute;
            top: 46%;
            left: 33%;
            width: 55%;
            height: 0.5%;
            background-color: #131840;
            z-index: 1;
        }

        &::after {
            content: '';
            position: absolute;
            top: 71%;
            left: 33%;
            width: 55%;
            height: 0.5%;
            background-color: #131840;
            z-index: 1;
        }

        .date {
            color: #BAA97D;
            font-size: 1.2rem;
            margin-left: 1%;
            margin-bottom: 1%;
        }

        .info {
            font-size: 1.5rem;
            margin-bottom: 3%;
            color: black;
        }

        .news_news_date_1{
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);
            transform: translateY(20px);
        }

        .news_news_date_2{
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);
            transform: translateY(20px);
        }

        .news_news_date_3{
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);
            transform: translateY(20px);
        }

        .news_news_info_1{
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);
            transform: translateY(20px);
        }

        .news_news_info_2{
            opacity: 0;
            transition-property: filter, opacity, transform;
            transition-duration: 2s;
            transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
            filter: blur(0);
            transform: translateY(20px);
        }

        .news_news_info_3{
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

        a {
            text-decoration: none;
        }
    }


}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .news_main {
        display: block;

        .news_text_block {
            margin-left: 16%;

            .news_text {
                font-size: 1.4rem;
            }
        }

        .news_news_block {
            margin-left: 16%;

            &::before {
                top: 46%;
                left: 16%;
                width: 62%;
            }

            &::after {
                top: 76%;
                left: 16%;
                width: 62%;
            }

            .date {
                font-size: 0.5rem;
            }

            .info {
                font-size: 0.7rem;
                margin-bottom: 11%;
            }
        }

    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .news_main {
        display: block;

        .news_text_block {
            margin-left: 8%;

            .news_text {
                margin-top: 0;

            }
        }

        .news_news_block {
            margin-top: 5%;
            margin-left: 8%;

            &::before {
                content: '';
                position: absolute;
                top: 63%;
                left: 33%;
                width: 650px;
                height: 0.5%;
                background-color: #131840;
                z-index: 1;
                display: none;
            }

            &::after {
                content: '';
                position: absolute;
                top: 80%;
                left: 33%;
                width: 650px;
                height: 0.5%;
                background-color: #131840;
                z-index: 1;
                display: none;
            }

            .info {
                font-size: 1.1rem;
                width: 700px;
                text-decoration: underline;
            }
        }
    }
}
</style>