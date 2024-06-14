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
            // bannerImage: "../../public/BANNER(ToKyo).png",
            bannerImage: "../../public/ToKyo.jpg",
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
            outlineList: [
                { outline_title: "商号", outline_content: "有限会社ジェーアルシー" },
                { outline_title: "代表者", outline_content: "一　鵬" },
                { outline_title: "設立", outline_content: "平成6年6月20日" },
                { outline_title: "登記", outline_content: "平成27年10月5日（要確認）" },
                { outline_title: "資本金", outline_content: "2,500万円" },
                { outline_title: "從業人數", outline_content: "正社員6名、アルバイト1名（要確認）" },
                { outline_title: "事業內容", outline_content: "有限会社ジェーアルシー" },
            ],
            historyList: [
                { history_time: "1994年 / 06月", history_text: "有限会社ジェーアルシー設立 ビザ＆法務部門設立" },
                { history_time: "2017年 / 07月", history_text: "有料紹介＆労働派遣部門設立" },
                { history_time: "2019年 / 10月", history_text: "登録支援機関許可取得" },
                { history_time: "2022年 / 02月", history_text: "不動産部門設立" },
            ]
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
            <ServiceInfo :serviceInfo_title_h2="serviceInfo_title_h2_1" :serviceInfo_title_p="serviceInfo_title_p_1"
                :serviceInfo_content_p="serviceInfo_content_p_1" />
        </div>
        <div class="outline_main">
            <div class="outline_mainTitle">
                <h1>OUR OUTLINE</h1>
            </div>
            <div class="outline_text">
                <div class="outline" v-for="(item, index) in outlineList" :key="index">
                    <Outline :outline_title="item.outline_title" :outline_content="item.outline_content" />
                </div>
            </div>
        </div>
        <img src="../../public/BANNER（ToKyo).png" alt="">
        <div class="history_main">
            <div class="history_title">
                <h1>HISTORY</h1>
            </div>
            <div class="history_content">
                <div class="history" v-for="(item, index) in historyList" :key="index">
                    <History :history_time="item.history_time" :history_text="item.history_text" />
                </div>
            </div>
        </div>
        <div class="serviceIcon">
            <ServiceIcon />
        </div>
    </div>

</template>

<style scoped lang="scss">
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

    .outline_main {
        width: 100vw;
        height: 74vh;
        background-color: #131840;
        display: flex;

        .outline_mainTitle::after {
            content: "";
            position: absolute;
            width: 45px;
            height: 45px;
            transform: rotate(45deg);
            border-radius: 5px;
            background-color: #BAA97D;
            left: 80%;
            top: 128%;
        }

        .outline_mainTitle {
            width: 15%;
            display: flex;
            justify-content: center;
            margin-top: 5%;

            h1 {
                writing-mode: vertical-rl;
                font-size: 2.2rem;
                color: white;
            }
        }

        .outline_mainTitle::before {
            content: "";
            position: absolute;
            width: 2px;
            height: 400px;
            background-color: #BAA97D;
            left: 10%;
            top: 130.5%
        }

        .outline_text {
            width: 80%;
            margin-top: 3%;
        }

        .outline {
            margin-top: 3%;
        }
    }

    .history_main {
        width: 100vw;
        height: 60vh;
        display: flex;

        .history_title {
            width: 15%;
            display: flex;
            justify-content: center;
            margin-top: 5%;

            h1 {
                writing-mode: vertical-rl;
                font-size: 2.2rem;
                color: #131840;
            }
        }

        .history_title::before {
            content: "";
            position: absolute;
            width: 2px;
            height: 50%;
            background-color: #c5c5c5;
            left: 17%;
            bottom: -158%;
        }

        .history_content {
            width: 80%;
            margin-top: 3%;

            .history {
                margin-top: 3%;
            }
        }
    }

    .serviceIcon {
        width: 100vw;
        height: 80vh;
    }

}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .aboutUs {
        .aboutUs_serviceInfo_block {
            display: block;
            margin-left: 20%;
        }

        .aboutUs_serviceInfo_block_two {
            margin-left: 21.5%;
            white-space: unset;
            margin-bottom: 0%;
            width: 230px;
        }

        .outline_main {
            height: 35vh;

            .outline_mainTitle::after {
                width: 20px;
                height: 20px;
                left: 83%;
                top: 114%;
            }

            .outline_mainTitle {

                h1 {
                    font-size: 1.3rem;
                }
            }

            .outline_mainTitle::before {
                width: 1px;
                height: 200px;
                left: 13%;
                top: 115.5%
            }
        }

        .history_main {
            height: 25vh;

            .history_title {
                width: 10%;

                h1 {
                    font-size: 1.3rem;
                }
            }

            .history_title::before {
                width: 1px;
                height: 18%;
                left: 13%;
                bottom: 0;
                top: 153%;
            }

        }

        .serviceIcon {
        height: 100vh;
    }
    }
}

//平板
@media screen and (min-width: 431px) and (max-width: 1024px) {
    .aboutUs {
        .outline_main {
            height: 38vh;

            .outline_mainTitle::before {
                height: 285px;
                top: 112.5%;
                left: 13%;
            }
        }

        .history_main {
            height: 38dvh;

            .history_title::before {
                bottom: -78%;
                left: 17.25%;
                height: 26dvh;
            }

            .history_title::after {
                width: 40px;
                height: 40px;
                left: 80%;
                top: 110.5%;
            }
        }

        .serviceIcon {
            height: 50vh;
        }
    }

}

//電腦螢幕
@media screen and (min-width: 1025px) {}
</style>
