<script>
import Banner from '../components/Banner.vue';
import PictureIntro from '../components/PictureIntro.vue';
import ServiceInfo from '../components/ServiceInfo.vue';
import ContactUs from '../components/ContactUs.vue';
import { RouterView } from 'vue-router';
export default {
    name: 'Scrivener',
    components: {
        Banner,
        PictureIntro,
        ServiceInfo,
        ContactUs,
        RouterView
    },
    data() {
        return {
            bannerImage: '/Scrivenerbanner.jpg',
            bannerTextOne: 'お客様に感動を提供し、',
            bannerTextTwo: '社会の発展に貢献',
            content_picture: '/LegalAffair.jpg',
            content_text_title_h2: '法務',
            content_text_title_h3: 'LEGAL AFFAIRS',
            content_text_intro_p1: '弊社と提携する学院は多所があり、学生に豊富なコースが選択できます。日本語学校を卒業後、学生自身の状況に応じた様々な進路を推薦します。',
            content_text_intro_p2: '日本語学校が修了後、大学に落ちた留学生を提携大学への入学を推薦します。',
            content_picture_1: '/VisaApplication.jpg',
            content_text_title_h2_1: 'ビザ申請代行',
            content_text_title_h3_1: 'VISA APPLICATION',
            content_text_intro_p1_1: '弊社と提携する学院は多所があり、学生に豊富なコースが選択できます。日本語学校を卒業後、学生自身の状況に応じた様々な進路を推薦します。',
            content_text_intro_p2_1: '日本語学校が修了後、大学に落ちた留学生を提携大学への入学を推薦します。',
            serviceInfoList: [
                { serviceInfo_title_h2: "トラブル相談と解決", serviceInfo_title_p: "Settle the problem", serviceInfo_content_p: "民事、刑事訴訟、離婚、財産相続のトラブルの裁判等" },
                { serviceInfo_title_h2: "契約書類作成と通訳", serviceInfo_title_p: "Create valid contract", serviceInfo_content_p: "各種申請書、契約書及び企画書の作成或いは日本語の通訳、翻訳業務" },
            ],
            serviceInfoList_two: [
                { serviceInfo_title_h2: "在留資格変更と更新", serviceInfo_title_p: "Professional", serviceInfo_content_p: "在留資格の認定、変更、更新申請の代行業務；" },
                { serviceInfo_title_h2: "様々なビザの申請", serviceInfo_title_p: "Experienced", serviceInfo_content_p: "日本への投資、仕事、商務ビザの申請、短期滞在ビザの申請；" },
            ],
        }
    },
    methods: {},
    mounted() { }
}
</script>

<template>
    <div class="scrivener">
        <div class="banner">
            <Banner :imgSrc="bannerImage" :textOne="bannerTextOne" :textTwo="bannerTextTwo" />
        </div>
        <div class="pictureIntro">
            <PictureIntro :imgSrc="content_picture" :textOne="content_text_title_h2" :textTwo="content_text_title_h3"
                :textThree="content_text_intro_p1" :textFour="content_text_intro_p2" />
        </div>
        <div class="scrivener_serviceInfo_block">
            <div class="scrivener_serviceInfo" v-for="(item, index) in serviceInfoList" :key="index">
                <ServiceInfo :serviceInfo_title_h2="item.serviceInfo_title_h2"
                    :serviceInfo_title_p="item.serviceInfo_title_p"
                    :serviceInfo_content_p="item.serviceInfo_content_p" />
            </div>
        </div>
        <div class="pictureIntro_two">
            <img class="pictureIntro_two_pic" :src="content_picture_1" alt="Picture Intro Two">
            <div class="text_content">
                <h2 class="text_content_h2">{{ content_text_title_h2_1 }}</h2>
                <h3 class="text_content_h3">{{ content_text_title_h3_1 }}</h3>
                <p class="text_content_p1">{{ content_text_intro_p1_1 }}</p>
                <p class="text_content_p2">{{ content_text_intro_p2_1 }}</p>
            </div>
        </div>
        <div class="scrivener_serviceInfo_block_two">
            <div class="scrivener_serviceInfo_two" v-for="(item, index) in serviceInfoList_two" :key="index">
                <ServiceInfo :serviceInfo_title_h2="item.serviceInfo_title_h2"
                    :serviceInfo_title_p="item.serviceInfo_title_p"
                    :serviceInfo_content_p="item.serviceInfo_content_p" />
            </div>
        </div>
        <div class="contactUs">
            <ContactUs />
        </div>
    </div>
</template>

<style scoped lang="scss">
.scrivener {
    width: 100vw;

    .banner {
        width: 100vw;
        height: 60vh;
    }

    .pictureIntro {
        width: 100vw;
        height: 80vh;
    }

    .scrivener_serviceInfo_block {
        position: relative;
        width: 70vw;
        display: flex;
        margin-left: 22%;
        margin-top: 15%;
    }

    .pictureIntro_two {
        width: 100vw;
        height: 80vh;
        position: relative;
        margin-top: 10%;

        .pictureIntro_two_pic {
            width: 70%;
            height: 100%;
            position: absolute;
        }

        .text_content {
            position: absolute;
            width: 50%;
            height: 50%;
            background-color: white;
            border-radius: 20pt;
            left: 50%;
            top: 73%;

            .text_content_h2 {
                margin-top: 6%;
                margin-left: 10%;
                font-size: 2rem;
            }

            .text_content_h2::before {
                content: "";
                position: absolute;
                width: 5%;
                height: 2%;
                background-color: #000;
                left: 11%;
                bottom: 55%;
            }

            .text_content_h3 {
                margin-top: 0.5%;
                margin-left: 11%;
                color: #B09D6B;
            }

            .text_content_p1 {
                margin-top: 8%;
                margin-left: 11%;
            }

            .text_content_p2 {
                margin-top: 5.5%;
                margin-left: 11%;
            }
        }
    }

    .scrivener_serviceInfo_block_two {
        position: relative;
        width: 70vw;
        display: flex;
        flex-wrap: wrap;
        margin-left: 30%;
        margin-top: 15%;
    }

    .contactUs {
        width: 100vw;
        height: 40vh;
        margin-top: 10%;
    }
}

@media screen and (min-width: 430px) and (max-width: 1024px) {
    .scrivener {
        .scrivener_serviceInfo_block {
            display: flex;
            justify-content: space-around;
        }

        .pictureIntro_two {
            .pictureIntro_two_pic {
                width: 100%;
                height: 80%;
                left: 0;
            }

            .text_content {
                width: 100%;
                left: 0;

                .text_content_h2::before {
                    bottom: 65%;
                }
            }
        }

        .scrivener_serviceInfo_block {
            .scrivener_serviceInfo {
                width: 265px;
            }
        }

        .scrivener_serviceInfo_block_two {
            margin-left: 25%;
            justify-content: space-around;

            .scrivener_serviceInfo_two {
                width: 265px;
            }
        }
    }
}
</style>
