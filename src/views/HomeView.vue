<script>
import HomeBanner from '../components/HomeBanner.vue';
import Title from '../components/Title.vue';
import Analytics from '../components/Analytics.vue';
import ServiceIcon from '../components/ServiceIcon.vue';
import Wechat from '../components/Wechat.vue';
import News from '../components/News.vue';
import Inquiry from '../components/Inquiry.vue';
import { RouterLink, RouterView } from 'vue-router'
export default {
    //語法糖
    name: 'Home',
    data() { // data = funtion(){}
        return {
            title: "ACHIEVENT",
            subtitle: "弊社の年間実績",
            analyticsList: [
                { analytics_title: "問合人数", analytics_data: 2982, analytics_unit: "人" },
                { analytics_title: "裁判依頼件数", analytics_data: 300, analytics_unit: "件" },
                { analytics_title: "成功率", analytics_data: 87.9, analytics_unit: "％" },
                { analytics_title: "留学依頼人数", analytics_data: 432, analytics_unit: "人" },
                { analytics_title: "職業紹介依頼件数", analytics_data: 697, analytics_unit: "件" },
                { analytics_title: "ビザ申込など件数", analytics_data: 1846, analytics_unit: "件" },
                { analytics_title: "不動産投資依頼人数", analytics_data: 109, analytics_unit: "人" },
                { analytics_title: "ローンなど相談", analytics_data: 930, analytics_unit: "件" },
                { analytics_title: "賃貸紹介件数", analytics_data: 866, analytics_unit: "件" }
            ],
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
        HomeBanner,
        Title,
        Analytics,
        ServiceIcon,
        Wechat,
        News,
        Inquiry,
        RouterView
    },
    mounted() {
        this.serviceIconAnimation(document.querySelector(".analyticsBlock"))
        this.serviceIconAnimation(document.querySelector(".achievement"))
    }
}
</script>

<template>
    <div class="homeView">
        <div class="homeBanner">
            <HomeBanner />
        </div>
        <div class="homeView_title">
            <Title :title="title" :subtitle="subtitle" />
        </div>
        <div class="analyticsBlock">
            <Analytics v-for="(item, index) in analyticsList" :key="index" :analytics_title="item.analytics_title"
                :analytics_data="item.analytics_data" :analytics_unit="item.analytics_unit" />
        </div>
        <div class="achievement">
            <p class="achievement_p1">実績出したから、信頼関係確実なので何でも安心！</p>
            <p class="achievement_p2">弊社の得意とするところですので、ぜひとも弊社にお任せください</p>
        </div>
        <div class="serviceIcon">
            <ServiceIcon />
        </div>
        <div class="wechat">
            <Wechat />
        </div>
        <div class="news">
            <News />
        </div>
    </div>
    <div class="inquiry">
        <Inquiry />
    </div>

</template>
<style scoped lang="scss">
.homeView {
    .homeBanner {
        width: 100%;
        height: 150vh;
    }

    .homeView_title {
        width: 15%;
        height: 7vh;
        margin: 0 auto;
    }

    .analyticsBlock {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 40px;
        margin-top: 5%;
        margin-left: 16%;
        overflow-wrap: initial;
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

    .achievement {
        margin-top: 5%;
        margin-bottom: 5%;
        font-weight: bold;
        text-align: center;
    }

    .serviceIcon {
        width: 100%;
        height: 65vh;
        display: flex;
    }

    .wechat {
        width: 100%;
        height: 60vh;
    }

    .news {
        width: 100%;
        height: 50vh;
    }

    .inquiry {
        width: 100%;
        height: 110vh;
    }

}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .homeView {
        .homeBanner {
            width: 100%;
            height: 80vh;
        }

        .homeView_title {
            margin-left: 35%;
            margin-bottom: 8%;
        }


        .analyticsBlock {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            margin-bottom: 5%;
            overflow-wrap: initial;
            width: 120px;
            gap: 0px;

            .analytics_block:nth-child(4) {
                display: none;
            }

            .analytics_block:nth-child(5) {
                display: none;
            }

            .analytics_block:nth-child(6) {
                display: none;
            }

            .analytics_block:nth-child(7) {
                display: none;
            }

            .analytics_block:nth-child(8) {
                display: none;
            }

            .analytics_block:nth-child(9) {
                display: none;
            }
        }

        .achievement {
            margin-top: 10%;
            margin-bottom: 10%;
            font-size: 0.6rem;
        }

        .serviceIcon {
            height: 700px;
        }

        .wechat {
            height: 60vh;
        }

        .news {
            height: 40vh;
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .homeView {
        .homeBanner {
            width: 100%;
            height: 110vh;
        }

        .homeView_title {
            margin-left: 40%;
        }

        .analyticsBlock {
            margin-left: 5%;
        }

        .news {
            width: 100%;
            height: 40vh;
        }

        .serviceIcon {
            height: 50vh;
        }

        .achievement {
            font-size: 1.2rem;
        }
    }
}
</style>