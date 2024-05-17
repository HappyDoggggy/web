<script setup>

</script>

<template>
    <div class="footerShow">
        <div class="top">
            <div class="topLeft">
                <div class="logo">
                    <img src="../../public/LOGO.png" alt="">
                </div>
                <div class="address">
                    <h3 class="name">有限会社ジェーアルシー</h3>
                    <h3 class="add">〒170-0004　東京都豊島区北大塚2-12-8　大星ビル5F</h3>
                </div>
                <div class="license">
                    <p class="licenseOne">行政書士登録証 第 112365533-1号</p>
                    <p class="licenseTwo">有料職業紹介事業許可番号 13-ユ-313847</p>
                </div>
                <div class="licensePhoto">
                    <img src="../../public/messageImage_1715911520807.jpg" alt="" class="licensePhotoOne">
                    <img src="../../public/messageImage_1715911537019.jpg" alt="" class="licensePhotoTwo">
                </div>
            </div>
            <div class="topRight">
                <div class="describe">
                    <h2 class="title">社会的な責任を持ち、プロサービスを提供する中国人のビザ＆不動産会社</h2>
                    <p class="desOne">民事、刑事訴訟、離婚、財産相続のトラブルの裁判等</p>
                    <p class="desTwo">在留資格の認定、変更、更新、帰化、家族滞在の申請代行</p>
                    <p class="desThree">経営・管理、配偶者、特定技能、留学、の商務ビザの申請</p>
                    <p class="desFour">不動産の投資、売買、賃貸、住宅ローン、保険等業務</p>
                    <p class="desFive">有料職業紹介</p>
                </div>
                <div class="menu">
                    <div class="menuOne">
                        <p class="jap">ホーム</p>
                        <p class="eng">TOP</p>
                    </div>
                    <div class="menuTwo">
                        <p class="jap">会社案内</p>
                        <p class="eng">ABOUT US</p>
                    </div>
                    <div class="menuThree">
                        <p class="jap">法務と行政書士</p>
                        <p class="eng">SCRIVENER</p>
                    </div>
                    <div class="menuFour">
                        <p class="jap">不動産</p>
                        <p class="eng">REAL EASTATE</p>
                    </div>
                    <div class="menuFive">
                        <p class="jap">ビザサービス</p>
                        <p class="eng">VISA SERVICE</p>
                    </div>
                    <div class="menuSix">
                        <p class="jap">聯絡我們</p>
                        <p class="eng">CONTACT US</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <p>Copyright (C) 有限会社ジェーアルシー All Rights Reserved.</p>
        </div>
    </div>
</template>
<style scoped lang="scss">
.body {
    margin: 0 auto;
}

.footerShow {
    height: 100%;
    width: 100%;
    background-color: white;

    .top {
        width: 100%;
        height: 90%;
        display: flex;
        .topLeft {
            img {
                width: 278px;
                height: 83px;
                margin-left: 120px;
                margin-top: 60px;
            }

            .address {
                margin-left: 120px;
                margin-top: 40px;

                .name {
                    margin-bottom: 10px;
                }
            }

            .license {
                margin-top: 60px;
                margin-left: 120px;
            }

            .licensePhoto {
                .licensePhotoOne {
                    width: 119px;
                    height: 81px;
                    margin-bottom: 140px;
                }

                .licensePhotoTwo {
                    width: 89px;
                    height: 126px;
                    margin-bottom: 100px;
                    margin-left: 60px;
                }
            }
        }

        .topRight {
            .describe{
                margin-top: 190px;
                margin-left: 40px;
                .title{
                    font-size: 16pt;
                }
                .desOne{
                    margin-top: 20px;
                }
                .desFour{
                    margin-top: 40px;
                }
                .desFive{
                    margin-top: 20px;
                }
            }
            .menu{
                display: flex;
                justify-content: space-around;
                margin-left: 20px;
                margin-top: 60px;
                .eng{
                    font-size: 8pt;
                    color: #BAA97D;
                }
            }
        }
    }

    .bottom {
        width: 100%;
        height: 10%;
        background-color: #131840;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            color: #BAA97D;
        }
    }
}
</style>