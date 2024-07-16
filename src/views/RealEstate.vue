<script>
import Banner from '../components/Banner.vue';
import Title from '../components/Title.vue';
import RealEstateIcon from '../components/RealEstateIcon.vue';
import ContactUs from '../components/ContactUs.vue';
import MainInfo from '../components/MainInfo.vue';
import { RouterView } from 'vue-router';
export default {
    name: 'RealEstate',
    components: {
        Banner,
        Title,
        RealEstateIcon,
        ContactUs,
        MainInfo,
        RouterView
    },
    data() {
        return {
            bannerImage: '/RealEstate.jpg',
            bannerTextOne: 'お客様に感動を提供し、',
            bannerTextTwo: '社会の発展に貢献',
            //
            mainInfo_text: "REAL ESTATE",
            mainInfo_subText: "不動産",
            mainIntroP_1: "担当者は一人一人自分の得意な分野をもっております。",
            subIntro_1: "弊社は業種が多元化のため、海外から日本に移住しようとするお客様にビザ代行から不動産の売買業務まで全般的なサービスを行うことができます。",
            subIntro_2: "留学生に向けて不動産の売買賃貸業務、海外客の移住や投資のために不動産の売買業務、海外管理者及び社員が来日の住所の手配等の業務を行っております。",
            //
            title: "SERVICE",
            subtitle: "不動産業務サービス",
        }
    },
    methods: {},
    mounted() { }
}
</script>

<template>
    <div class="realestate">
        <div class="banner">
            <Banner :imgSrc="bannerImage" :textOne="bannerTextOne" :textTwo="bannerTextTwo" />
        </div>
        <div class="mainInfo">
            <MainInfo :mainInfo_text="mainInfo_text" :mainInfo_subText="mainInfo_subText" :mainIntroP_1="mainIntroP_1"
                :subIntro_1="subIntro_1" :subIntro_2="subIntro_2" />
        </div>
        <div class="realEstate_title">
            <Title :title="title" :subtitle="subtitle" />
        </div>
        <div class="realEstateIcon">
            <RealEstateIcon />
        </div>
        <div class="contactUs">
            <ContactUs />
        </div>
    </div>
</template>

<style scoped lang="scss">
.realestate {
    .banner {
        width: 100%;
        height: 60vh;
    }

    .mainInfo {
        width: 100%;
        height: 70vh;
        margin-bottom: 10%;
    }

    .realEstate_title {
        width: 15%;
        height: 7vh;
        margin-left: 25%;
        margin-top: 5%;
    }

    .realEstateIcon {
        width: 100%;
        height: 40vh;
        margin-top: 5%;
    }

    .contactUs {
        width: 100%;
        height: 50vh;
    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .realestate {
        .banner{
            height: 37.3vh;
        }
        .realEstate_title {
            width: 15%;
            height: 7vh;
            margin-left: 15%;
            margin-top: 5%;
        }

        .realEstateIcon {
            height: 15vh;
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .realestate {
        .banner{
            height: 49.9vh;
        }
        .mainInfo {
            height: 50vh;
        }

        .realEstateIcon {
            height: 20vh;
            margin-right: 10%;
        }

        .realEstate_title {
            margin-left: 12%;
        }
    }
}
</style>