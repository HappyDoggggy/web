<script>
import Banner from '../components/Banner.vue';
import PictureIntro from '../components/PictureIntro.vue';
import PictureIntroTwo from '../components/PictureIntroTwo.vue';
import ContactUs from '../components/ContactUs.vue';
import MainInfo from '../components/MainInfo.vue';
import { RouterView } from 'vue-router';
export default {
    name: 'Visa',
    components: {
        Banner,
        PictureIntro,
        PictureIntroTwo,
        ContactUs,
        MainInfo,
        RouterView
    },
    data() {
        return {
            bannerImage: '/visa.jpg',
            bannerTextOne: 'お客様に感動を提供し、',
            bannerTextTwo: '社会の発展に貢献',
            //
            mainInfo_text: "VISA SERVICES",
            mainInfo_subText: "ビザサービス",
            mainIntroP_1: "商用・留学・就労・特定技能ビザの手配は豊富な経験と多くの実績を持つ",
            mainIntroP_2: "煩雑な手続きのサポートサービスを行っております",
            //
            content_picture: '/student.jpg',
            content_text_title_h2: '留学ビザ',
            content_text_title_h3: 'STUDENT VISA',
            content_text_intro_p1: '弊社と提携する学院は多所があり、学生に豊富なコースが選択できます。日本語学校を卒業後、学生自身の状況に応じた様々な進路を推薦します。',
            content_text_intro_p2: '日本語学校が修了後、大学に落ちた留学生を提携大学への入学を推薦します。',
            //
            content_picture_arr: ['/VISA2.jpg', '/VISA3.jpg', '/VISA4.jpg'],
            content_text_title_h2_1: '有料職業紹介',
            content_text_title_h3_1: 'CHARGED EMPLOYMENT PLACEMENT BUSINESSES',
            content_text_intro_p1_1: '転職で失敗する人が多い裏側には、転職サイトやエージェントサービスごとに得意不得意があるという背景があります。あなたにおすすめの転職サービスを診断します',
            content_text_intro_p2_1: '得意職種　販売・ＩＴ・飲食',
            //
            content_picture_2: '/nurse.jpg',
            content_text_title_h2_2: '特定技能ビザ',
            content_text_title_h3_2: 'SPECIFIED SKILLED WORKER VISA',
            content_text_intro_p1_2: '弊社は30年以上の豊富なビザ代行経験に基づき、申請を提出し2022年10月に登録支援機関の許可をいただきました。数年間で数十社の提携企業に百人以上の労動技術者を推薦しました。',
            content_text_intro_p2_2: '得意職種　外食・介護・ホテル',
            //
        }
    },
    methods: {},
    mounted() { }
}
</script>

<template>
    <div class="visa">
        <div class="banner">
            <Banner :imgSrc="bannerImage" :textOne="bannerTextOne" :textTwo="bannerTextTwo" />
        </div>
        <div class="mainInfo">
            <MainInfo :mainInfo_text="mainInfo_text" :mainInfo_subText="mainInfo_subText" :mainIntroP_1="mainIntroP_1"
                :mainIntroP_2="mainIntroP_2" />
        </div>
        <div class="pictureIntro">
            <PictureIntro :imgSrc="content_picture" :textOne="content_text_title_h2" :textTwo="content_text_title_h3"
                :textThree="content_text_intro_p1" :textFour="content_text_intro_p2" />
        </div>
        <div class="visa_workingVisa">
            <div class="visa_workingVisa_text_title">
                <h2 class="visa_workingVisa_text_title_h2">就労ビザ</h2>
                <h3 class="visa_workingVisa_text_title_h3">WORKING VISA</h3>
            </div>
            <div class="visa_workingVisa_text_intro">
                <p class="visa_workingVisa_text_intro_p1">
                    弊社と提携する学院は多所があり、学生に豊富なコースが選択できます。日本語学校を卒業後、学生自身の状況に応じた様々な進路を推薦します。</p>
                <p class="visa_workingVisa_text_intro_p2">日本語学校が修了後、大学に落ちた留学生を提携大学への入学を推薦します。</p>
            </div>
        </div>
        <div class="pictureIntroTwo">
            <PictureIntroTwo :text1="content_text_title_h2_1" :text2="content_text_title_h3_1"
                :text3="content_text_intro_p1_1" :text4="content_text_intro_p2_1" :picArr="this.content_picture_arr" />
        </div>
        <div class="pictureIntro_three">
            <img class="pictureIntro_three_pic" :src="content_picture_2" alt="Picture Intro Two">
            <div class="text_content_2">
                <h2 class="text_content_h2_2">{{ content_text_title_h2_2 }}</h2>
                <h3 class="text_content_h3_2">{{ content_text_title_h3_2 }}</h3>
                <p class="text_content_p1_2">{{ content_text_intro_p1_2 }}</p>
                <p class="text_content_p2_2">{{ content_text_intro_p2_2 }}</p>
            </div>
        </div>
        <div class="contactUs">
            <ContactUs />
        </div>
    </div>
</template>

<style scoped lang="scss">
.visa {
    .banner {
        width: 100vw;
        height: 60vh;
    }

    .mainInfo {
        width: 100vw;
        height: 70vh;
    }

    .pictureIntro {
        width: 100vw;
        height: 80vh;
    }

    .visa_workingVisa {
        background-color: white;
        margin-top: 20%;
        margin-left: 15%;
        width: 40%;
        height: 50%;
        position: relative;

        .visa_workingVisa_text_title {
            margin-top: 6%;
            margin-left: 10%;

            .visa_workingVisa_text_title_h2 {
                font-size: 2rem;
            }

            .visa_workingVisa_text_title_h3 {
                color: #B09D6B;
            }
        }

        .visa_workingVisa_text_title::before {
            content: "";
            position: absolute;
            width: 5%;
            height: 3%;
            background-color: #000;
            left: 12.5%;
            transform: translateX(-50%);
            bottom: 60%;
        }

        .visa_workingVisa_text_intro {
            margin-top: 8%;
            margin-left: 10%;
            margin-right: 10%;

            .visa_workingVisa_text_intro_p2 {
                margin-top: 3%;
            }
        }
    }

    .pictureIntroTwo {
        width: 100vw;
        height: 80vh;
    }

    .pictureIntro_three {
        width: 100vw;
        height: 80vh;
        position: relative;
        margin-top: 20%;
        margin-bottom: 10%;

        .pictureIntro_three_pic {
            width: 70%;
            height: 100%;
            position: absolute;
        }

        .text_content_2 {
            position: absolute;
            width: 45%;
            height: 50%;
            background-color: white;
            border-radius: 20pt;
            left: 40%;
            top: 65%;

            .text_content_h2_2 {
                margin-top: 6%;
                margin-left: 10%;
                font-size: 2rem;
            }

            .text_content_h2_2::before {
                content: "";
                position: absolute;
                width: 5%;
                height: 2%;
                background-color: #000;
                left: 11%;
                bottom: 55%;
            }

            .text_content_h3_2 {
                margin-top: 0.5%;
                margin-left: 11%;
                color: #B09D6B;
            }

            .text_content_p1_2 {
                margin-top: 8%;
                margin-left: 11%;
            }

            .text_content_p2_2 {
                margin-top: 5%;
                margin-left: 11%;
            }
        }
    }

    .contactUs {
        width: 100vw;
        height: 40vh;
        margin-top: 15%;
    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .visa {

        .visa_workingVisa {
            margin-left: 0;
            margin-bottom: 5%;
            width: 100%;

            .visa_workingVisa_text_title {

                .visa_workingVisa_text_title_h2 {
                    font-size: 1.2rem;
                }

                .visa_workingVisa_text_title_h3 {
                    font-size: 0.7rem;
                }
            }

            .visa_workingVisa_text_title::before {
                height: 1.5%;
            }

            .visa_workingVisa_text_intro {

                .visa_workingVisa_text_intro_p1 {
                    font-size: 0.7rem;
                }

                .visa_workingVisa_text_intro_p2 {
                    font-size: 0.7rem;
                }
            }
        }

        .pictureIntroTwo {
            width: 100vw;
            height: 80vh;
        }

        .pictureIntro_three {
            .pictureIntro_three_pic {
                width: 100%;
                height: 80%;
                left: 0;
            }

            .text_content_2 {
                width: 100%;
                left: 0;
                border-radius: 0;
                height: 30%;

                .text_content_h2_2 {
                    margin-left: 4%;
                    font-size: 1.2rem;
                }

                .text_content_h2_2::before {
                    bottom: 0;
                    top: 80px;
                    left: 4%;
                }

                .text_content_h3_2 {
                    margin-left: 4%;
                    font-size: 0.7rem;
                }

                .text_content_p1_2 {
                    margin-left: 4%;
                    font-size: 0.7rem;
                    width: 350px;
                }

                .text_content_p2_2 {
                    margin-left: 4%;
                    font-size: 0.7rem;
                }
            }
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .visa {
        .mainInfo {
            height: 50vh;

            .mainInfo_main {
                .subIntro {
                    display: none;
                }
            }
        }

        .visa_workingVisa {
            width: 100%;
            margin-left: 0;

            .visa_workingVisa_text_title::before {
                bottom: 54%;
                height: 4.5%;
            }

            .visa_workingVisa_text_title {
                .visa_workingVisa_text_title_h2 {
                    font-size: 2.2rem;
                }
            }

        }

        .pictureIntro_three {
            .pictureIntro_three_pic {
                width: 100%;
                height: 80%;
                left: 0;
            }

            .text_content_2 {
                width: 100%;
                left: 0;
                height: 48%;

                .text_content_h2_2 {
                    margin-left: 8%;
                }

                .text_content_h2_2::before {
                    bottom: 65.5%;
                    left: 8%;
                }

                .text_content_h3_2 {
                    margin-left: 8%;
                }

                .text_content_p1_2 {
                    margin-left: 8%;
                }

                .text_content_p2_2 {
                    margin-left: 8%;
                }
            }
        }
    }

}
</style>
