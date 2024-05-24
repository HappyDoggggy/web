<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
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
            <div class="info_link">
                <div class="info_link_block">
                    <a href="" class="home link">ホーム</a>
                    <a href="" class="company link">会社案内</a>
                    <a href="" class="law link">法務と行政書士</a>
                    <a href="" class="building link">不動産</a>
                    <a href="" class="visa link">ビザサービズ</a>
                </div>
            </div>
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

    .header_logo {
        width: 13%;
        height: 100%;
        background-image: url(../../public/LOGO.png);
        background-repeat: round;

    }

    .header_info {
        width: 86%;
        height: 100%;
        background-color: #FDFDFD;

        .header_info_block {
            width: 100%;
            height: 50%;
            display: flex;

            .address {
                margin-top: 0.5%;
                margin-left: 61%;
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
                }
            }
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
            font-size: 15pt;
        }
    }
}
</style>