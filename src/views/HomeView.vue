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
    width: 100vw;

    .homeBanner {
        width: 100vw;
        height: 150vh;
    }

    .homeView_title {
        width: 15vw;
        height: 7vh;
        margin-left: 45%;
    }

    .analyticsBlock {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 40px;
        margin-top: 5%;
        margin-left: 16%;
        overflow-wrap: initial;
    }

    .achievement {
        margin-top: 5%;
        margin-bottom: 5%;
        font-weight: bold;
        text-align: center;
    }

    .serviceIcon {
        width: 100vw;
        height: 65vh;
        display: flex;
    }

    .wechat {
        width: 100vw;
        height: 60vh;
    }

    .news {
        width: 100vw;
        height: 50vh;
    }

    .inquiry {
        width: 100vw;
        height: 110vh;
    }

}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .homeView {
        .homeBanner {
            width: 100vw;
            height: 80vh;
        }

        .homeView_title {
            margin-left: 35%;
            margin-bottom: 8%;
        }

        .analyticsBlock {
            gap: 20px;
            margin-left: 6%;
        }

        .achievement {
            margin-top: 10%;
            margin-bottom: 10%;
            font-size: 0.6rem;
        }
        .serviceIcon{
            height: 700px;
        }
        .wechat{
            height: 60vh;
        }
        .news{
            height: 40vh;
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .homeView {
        .homeBanner {
            width: 100vw;
            height: 110vh;
        }

        .homeView_title {
            margin-left: 40%;
        }

        .analyticsBlock {
            margin-left: 5%;
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