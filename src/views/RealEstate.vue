<script>
import Banner from '../components/Banner.vue';
import Title from '../components/Title.vue';
import RealEstateIcon from '../components/RealEstateIcon.vue';
import ContactUs from '../components/ContactUs.vue';
import { RouterView } from 'vue-router';
export default {
    name: 'RealEstate',
    components: {
        Banner,
        Title,
        RealEstateIcon,
        ContactUs,
        RouterView
    },
    data() {
        return {
            bannerImage: '/RealEstate.jpg',
            bannerTextOne: 'お客様に感動を提供し、',
            bannerTextTwo: '社会の発展に貢献',
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
    width: 100vw;

    .banner {
        width: 100vw;
        height: 60vh;
    }

    .realEstate_title {
        width: 15vw;
        height: 7vh;
        margin-left: 18%;
        margin-top: 5%;
    }

    .realEstateIcon {
        width: 100vw;
        height: 40vh;
        margin-top: 5%;
    }

    .contactUs {
        width: 100vw;
        height: 40vh;
    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .realestate {
        .realEstate_title {
        width: 15vw;
        height: 7vh;
        margin-left: 15%;
        margin-top: 5%;
    }
        .realEstateIcon {
            height: 15vh;
        }
    }
}

@media screen and (min-width: 430px) and (max-width: 1024px) {
    .realestate {
        .realEstateIcon {
            height: 20vh;
            margin-right: 10%;
        }
    }
}
</style>