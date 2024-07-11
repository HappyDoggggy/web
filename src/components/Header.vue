<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
        }
    },
    methods: {
        hidebar() {
            const sidebar = document.querySelector(".info_link_close")
            sidebar.style.display = "none"
        },
        showbar() {
            const sidebar = document.querySelector(".info_link_close")
            sidebar.style.display = "flex"
            console.log("xxxx")
            console.dir(sidebar)
        }
    },
    components: {
        RouterLink,
    },
    computed: {
    }
}
</script>

<template>
    <div class="header_main">
        <div class="header_logo">
        </div>
        <div class="header_info">
            <div class="header_info_block">
                <span class="address">東京都豊島区北大塚２ー１２ー８　大星ビル5F　　</span>
                <span class="content">法務・留学・有料職業紹介・特定技能・不動産業務</span>
            </div>
            <div class="info_link_close">
                <RouterLink to="/" class="link" @click="hidebar()">ホーム</RouterLink>
                <RouterLink to="/AboutUs" class="link" @click="hidebar()">会社案内</RouterLink>
                <RouterLink to="/Scrivener" class="link" @click="hidebar()">法務と行政書士</RouterLink>
                <RouterLink to="/RealEstate" class="link" @click="hidebar()">不動産</RouterLink>
                <RouterLink to="/Visa" class="link" @click="hidebar()">ビザサービズ</RouterLink>
                <i class="fa-solid fa-xmark" @click="hidebar()"></i>

            </div>
            <!-- 這是打叉圖，會先隱藏起來 -->
            <div class="info_link">
                <div class="info_link_block">
                    <RouterLink to="/" class="link">ホーム</RouterLink>
                    <RouterLink to="/AboutUs" class="link">会社案内</RouterLink>
                    <RouterLink to="/Scrivener" class="link">法務と行政書士</RouterLink>
                    <RouterLink to="/RealEstate" class="link">不動産</RouterLink>
                    <RouterLink to="/Visa" class="link">ビザサービズ</RouterLink>
                </div>
                <i class="fa-solid fa-bars" @click="this.showbar()"></i>
            </div>
            <!-- 漢堡圖（當寬度塞不下所有 header 資訊時要出現） -->
        </div>
        <div class="mail">
            <a href=""><i class="fa-solid fa-envelope"></i></a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header_main {
    width: 100%;
    height: 100%;
    display: flex;
    padding-left: 1%;

    .header_logo {
        width: 260px;
        height: 90%;
        background-image: url(../../public/LOGO2.png);
        background-repeat: round;

    }

    .header_info {
        width: 83%;
        height: 100%;
        background-color: #FDFDFD;

        .header_info_block {
            width: 100%;
            height: 50%;
            display: flex;

            .address {
                margin-top: 0.5%;
                margin-left: 58.5%;
                font-weight: bold;
                font-size: 0.6rem;
            }

            .content {
                margin-top: 0.5%;
                font-weight: bold;
                font-size: 0.6rem;
            }
        }

        .info_link {
            width: 100%;
            height: 50%;
            margin-top: -0.6%;

            .info_link_block {
                display: flex;
                justify-content: right;

                .link {
                    font-size: 11pt;
                    margin-right: 3%;
                    font-weight: bold;
                    color: black;
                    text-decoration: none;
                }

            }

            .fa-bars {
                display: none;
            }
        }

        .info_link_close {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 250px;
            height: 100dvh;
            // display: flex;
            flex-direction: column;
            background-color: rgb(255, 255, 255, 0.2);
            backdrop-filter: blur(12px);
            z-index: 999;
        }

    }

    .mail {
        width: 4%;
        height: 100%;
        background-color: #131840;
        display: flex;
        justify-content: center;
        align-items: center;

        .fa-envelope {
            color: #FDFDFD;
            font-size: 20pt;
        }
    }
}

//手機
@media screen and (min-width: 300px) and (max-width: 430px) {
    .header_main {
        .header_info {
            .header_info_block {
                display: none;
            }

            .info_link {
                position: relative;

                .info_link_block {
                    display: none;
                }

                .fa-bars {
                    display: block;
                    font-size: 30pt;
                    z-index: 10;
                    position: absolute;
                    right: 3dvw;
                    top: 2dvw;
                }
            }

            .info_link_close {
                width: 100dvw;
                align-items: center;
                justify-content: center;
                background-color: white;
                gap: 40px;


                .link {
                    color: black;
                    align-items: center;
                    font-size: 1.5rem;
                    margin-bottom: 4%;
                    text-decoration: none;
                }

                // .xdiv {
                //     position: relative;
                //     width: 30px;
                //     height: 30px;
                //     border: 2pt black solid;
                //     border-radius: 100px;

                    .fa-xmark {
                        position: absolute;
                        color: black;
                        font-size: 1.4rem;
                        top: 15%;
                        right: 20%;
                    }
                // }
            }
        }

        .mail {
            display: none;
        }
    }

}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .header_main {
        .header_logo {
            width: 310px;
            height: 86%;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .header_info {
            .info_link_close {
                display: none;
            }

            .header_info_block {
                justify-content: flex-end;

                .address {
                    margin-left: 10%;
                    margin-top: 3%;
                }

                .content {
                    margin-top: 3%;
                    width: 240px;
                }
            }
        }

        .mail {
            width: 8%;
        }
    }
}
</style>