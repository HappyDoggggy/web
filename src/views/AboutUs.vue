<script>
import Banner from '../components/Banner.vue';
import Title from '../components/Title.vue';
import ServiceInfo from '../components/ServiceInfo.vue';
import Outline from '../components/Outline.vue';
import History from '../components/History.vue';
import ServiceIcon from '../components/ServiceIcon.vue';
import { RouterView } from 'vue-router';
export default {
    name: 'AboutUs',
    components: {
        Banner,
        Title,
        ServiceInfo,
        Outline,
        History,
        ServiceIcon,
        RouterView
    },
    data() {
        return {
            bannerImage: '/Tokyo.jpg',
            bannerTextOne: 'お客様に感動を提供し、',
            bannerTextTwo: '社会の発展に貢献',
            title: "STRENGTH",
            subtitle: "弊社の強み",
            serviceInfoList: [
                { serviceInfo_title_h2: "法務とビザの専門家", serviceInfo_title_p: "Professional", serviceInfo_content_p: "ニーズにお応え、プロの経験から提案し、より効率的に解決できます。" },
                { serviceInfo_title_h2: "経験豊富なベテラン", serviceInfo_title_p: "Experienced", serviceInfo_content_p: "チームのメンバーは数十年以上日本に生活した経験があります" },
            ],
            serviceInfo_title_h2_1: "プロサービスを提供", 
            serviceInfo_title_p_1: "Experienced", 
            serviceInfo_content_p_1: "多くの大手企業と合意に達していて、長期かつ安定な提携関係を維持しています。",
        }
    },
    methods: {},
    mounted() { }
}
</script>
<template>
    <div class="aboutUs">
        <div class="banner">
            <Banner :imgSrc="bannerImage" :textOne="bannerTextOne" :textTwo="bannerTextTwo" />
        </div>
        <div class="aboutUs_title">
            <Title :title="title" :subtitle="subtitle" />
        </div>
        <div class="aboutUs_serviceInfo_block">
            <div class="aboutUs_serviceInfo" v-for="(item, index) in serviceInfoList" :key="index">
                <ServiceInfo :serviceInfo_title_h2="item.serviceInfo_title_h2"
                    :serviceInfo_title_p="item.serviceInfo_title_p"
                    :serviceInfo_content_p="item.serviceInfo_content_p" />
            </div>
        </div>
        <div class="aboutUs_serviceInfo_block_two">
            <ServiceInfo :serviceInfo_title_h2="serviceInfo_title_h2_1"
                    :serviceInfo_title_p="serviceInfo_title_p_1"
                    :serviceInfo_content_p="serviceInfo_content_p_1"/>
        </div>
        <div class="outline">
            <Outline />
        </div>
        <div class="history">
            <History />
        </div>
        <div class="serviceIcon">
            <ServiceIcon />
        </div>
    </div>

</template>

<style>
.aboutUs {
    width: 100vw;

    .banner {
        width: 100vw;
        height: 60vh;
    }

    .aboutUs_title {
        width: 15vw;
        height: 7vh;
        margin-left: 17%;
    }

    .aboutUs_serviceInfo_block {
        position: relative;
        width: 70vw;
        display: flex;
        flex-wrap: wrap;
        margin-left: 16%;
        margin-top: 5%;
        margin-bottom: 3%;

        .aboutUs_serviceInfo {
            margin-left: 5%;
        }
    }

    .aboutUs_serviceInfo_block_two {
        position: relative;
        display: flex;
        margin-left: 20.2%;
        white-space: nowrap;
        margin-bottom: 10%;
    }

    .outline {
        width: 100vw;
        height: 70vh;
    }

    .history {
        width: 100vw;
        height: 60vh;
    }

    .serviceIcon {
        width: 100vw;
        height: 80vh;
    }

}
</style>
