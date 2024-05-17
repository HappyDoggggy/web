<script>

</script>

<template>
    <div class="main">
        <div class="logo">
        </div>
        <div class="info">
            <div class="infoUp">
                <div class="infoUpText"> 東京都豊島区北大塚２ー１２ー８　大星ビル5F　　法務・留学・有料職業紹介・特定技能・不動産業務</div>
            </div>
            <div class="infoDown">
                <div class="infoDownArea">
                    <div class="home area">ホーム</div>
                    <div class="company area">会社案内</div>
                    <div class="law area">法務と行政書士</div>
                    <div class="building area">不動産</div>
                    <div class="visa area">ビザサービズ</div>
                </div>
            </div>
        </div>
        <div class="mail">
            <i class="fa-solid fa-envelope"></i>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main {
    width: 100%;
    height: 100%;
    display: flex;

    .logo {
        width: 13%;
        height: 100%;
        background-image: url(../../public/LOGO.png);
        background-repeat: round;

    }

    .info {
        width: 86%;
        height: 100%;
        background-color: #FDFDFD;

        .infoUp {
            width: 100%;
            height: 50%;

            .infoUpText {
                margin-top: 0.5%;
                font-weight: bold;
                font-size: 7pt;
                display: flex;
                justify-content: right;
                margin-right: 3%;
            }
        }

        .infoDown {
            width: 100%;
            height: 50%;
            margin-top: -0.6%;

            .infoDownArea {
                display: flex;
                justify-content: right;

                .area {
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