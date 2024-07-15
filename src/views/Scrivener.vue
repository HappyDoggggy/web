<script>
import Banner from '../components/Banner.vue';
import PictureIntro from '../components/PictureIntro.vue';
import ServiceInfo from '../components/ServiceInfo.vue';
import ContactUs from '../components/ContactUs.vue';
import MainInfo from '../components/MainInfo.vue';
import { RouterView } from 'vue-router';
export default {
    name: 'Scrivener',
    components: {
        Banner,
        PictureIntro,
        ServiceInfo,
        ContactUs,
        MainInfo,
        RouterView
    },
    data() {
        return {
            bannerImage: '/Scrivenerbanner.jpg',
            bannerTextOne: 'お客様に感動を提供し、',
            bannerTextTwo: '社会の発展に貢献',
            //
            mainInfo_text: "SCRIVENER",
            mainInfo_subText: "法務と行政書士",
            mainIntroP_1: "お客様のニーズをよく理解しており、",
            mainIntroP_2: "お客様をより早く日本の社会に溶け込ませように頑張ります",
            subIntro_1: "行政書士事務所は1994年（平成6年）6月に設立され、会社の一番目の部門です。ビザに関する業務を行っております。",
            subIntro_2: "特に民事、刑事訴訟、離婚、財産相続等の案件が得意です。成功率が80％以上でございます。豊富な経験を持っております。",
            //
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
        this.serviceIconAnimation(document.querySelector(".scrivener_serviceInfo_block"))
        this.serviceIconAnimation(document.querySelector(".scrivener_serviceInfo_block_two"))
        this.serviceIconAnimation(document.querySelector(".text_content_h2"))
        this.serviceIconAnimation(document.querySelector(".text_content_h3"))
        this.serviceIconAnimation(document.querySelector(".text_content_p1"))
        this.serviceIconAnimation(document.querySelector(".text_content_p2"))
    }
}
</script>

<template>
    <div class="scrivener">
        <div class="banner">
            <Banner :imgSrc="bannerImage" :textOne="bannerTextOne" :textTwo="bannerTextTwo" />
        </div>
        <div class="mainInfo">
            <MainInfo :mainInfo_text="mainInfo_text" :mainInfo_subText="mainInfo_subText" :mainIntroP_1="mainIntroP_1"
                :mainIntroP_2="mainIntroP_2" :subIntro_1="subIntro_1" :subIntro_2="subIntro_2" />
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

    .mainInfo {
        width: 100vw;
        height: 70vh;
        margin-bottom: 10%;
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
        opacity: 0;
        transition-property: filter, opacity, transform;
        transition-duration: 2s;
        transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
        filter: blur(0);
        transform: translateY(20px);
    }

    .pictureIntro_two {
        width: 100vw;
        height: 80vh;
        position: relative;
        margin-top: 10%;

        .pictureIntro_two_pic {
            max-width: 100%;
            position: absolute;
        }

        .text_content {
            position: absolute;
            width: 50%;
            height: 50%;
            background-color: white;
            border-radius: 20pt;
            left: 40%;
            top: 73%;

            &::before {
                content: "";
                position: absolute;
                width: 30px;
                height: 5px;
                background-color: #000;
                left: 11%;
                top: 45%;
            }

            .text_content_h2 {
                margin-top: 6%;
                margin-left: 10%;
                font-size: 2rem;
                opacity: 0;
                transition-property: filter, opacity, transform;
                transition-duration: 2s;
                transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
                filter: blur(0);
                transform: translateY(20px);
            }

            .text_content_h3 {
                margin-top: 0.5%;
                margin-left: 11%;
                color: #B09D6B;
                opacity: 0;
                transition-property: filter, opacity, transform;
                transition-duration: 2s;
                transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
                filter: blur(0);
                transform: translateY(20px);
            }

            .text_content_p1 {
                margin-top: 8%;
                margin-left: 11%;
                width: 700px;
                opacity: 0;
                transition-property: filter, opacity, transform;
                transition-duration: 2s;
                transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
                filter: blur(0);
                transform: translateY(20px);
            }

            .text_content_p2 {
                margin-top: 5.5%;
                margin-left: 11%;
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
        }
    }

    .scrivener_serviceInfo_block_two {
        position: relative;
        width: 70vw;
        display: flex;
        flex-wrap: wrap;
        margin-left: 30%;
        margin-top: 15%;
        opacity: 0;
        transition-property: filter, opacity, transform;
        transition-duration: 2s;
        transition-timing-function: ease, ease, cubic-bezier(.215, .61, .355, 1);
        filter: blur(0);
        transform: translateY(20px);
    }

    .contactUs {
        width: 100vw;
        height: 40vh;
        margin-top: 10%;
    }

    .anime {
        opacity: 1;
        transform: translateZ(0);
        transform: translateY(0);
    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .scrivener {
        .banner {
            height: 37.3vh;
        }

        .scrivener_serviceInfo_block {
            position: relative;
            width: 70vw;
            display: block;
            margin-left: 22%;
            margin-top: 0;
        }

        .pictureIntro_two {
            height: 55vh;

            .pictureIntro_two_pic {
                max-width: 100%;
                left: 0;
            }

            .text_content {
                width: 100%;
                left: 0;
                border-radius: 0;

                &::before {
                    top: 95px;
                    width: 20px;
                    height: 3px;
                }

                .text_content_h2 {
                    font-size: 1.2rem;
                }


                .text_content_h3 {
                    font-size: 0.7rem;
                }

                .text_content_p1 {
                    margin-top: 15%;
                    font-size: 0.7rem;
                    width: 280px;
                }

                .text_content_p2 {
                    font-size: 0.7rem;
                    width: 280px;
                }
            }
        }

        .scrivener_serviceInfo_block_two {
            position: relative;
            width: 70vw;
            display: block;
            margin-left: 22%;
            margin-top: 45%;
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .scrivener {
        .banner {
            height: 49.9vh;
        }

        .mainInfo {
            height: 50vh;
        }

        .pictureIntro {
            margin-bottom: 20%;
        }

        .scrivener_serviceInfo_block {
            display: flex;
            justify-content: space-around;
        }

        .pictureIntro_two {
            .pictureIntro_two_pic {
                max-width: 100%;
                left: 0;
            }

            .text_content {
                width: 100%;
                left: 0;

                .text_content_p1 {
                    width: 650px;
                }

                &::before {
                    top: 37%;
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
            margin-top: 20%;

            .scrivener_serviceInfo_two {
                width: 265px;
            }
        }

        .contactUs {
            width: 100vw;
            height: 40vh;
        }
    }
}
</style>
