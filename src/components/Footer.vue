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

                    <div class="menu_link">
                        <p>
                            <RouterLink to="/" class="jap">ホーム</RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/" class="eng">TOP</RouterLink>
                        </p>
                    </div>


                    <div class="menu_link">
                        <p>
                            <RouterLink to="/AboutUs" class="jap">会社案内</RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/AboutUs" class="eng">ABOUT US</RouterLink>
                        </p>
                    </div>


                    <div class="menu_link">
                        <p>
                            <RouterLink to="/Scrivener" class="jap">法務と行政書士</RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/Scrivener" class="eng">SCRIVENER</RouterLink>
                        </p>
                    </div>


                    <div class="menu_link">
                        <p>
                            <RouterLink to="/RealEstate" class="jap">不動産</RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/RealEstate" class="eng">REAL EASTATE</RouterLink>
                        </p>
                    </div>


                    <div class="menu_link">
                        <p>
                            <RouterLink to="/Visa" class="jap">ビザサービズ</RouterLink>
                        </p>
                        <p>
                            <RouterLink to="/Visa" class="eng">VISA SERVICE</RouterLink>
                        </p>
                    </div>

                    <div class="menu_link">
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
                margin-left: 15%;
                margin-top: 60px;
            }

            .address {
                margin-left: 15%;
                margin-top: 40px;

                .name {
                    margin-bottom: 10px;
                }

                // .add{
                //     font-size: 0.8rem;
                // }
            }

            .license {
                margin-top: 60px;
                margin-left: 15%;
            }
        }

        .topRight {
            margin-right: 10%;

            .describe {
                margin-top: 190px;
                margin-left: 40px;

                .title {
                    font-size: 16pt;
                }

                .desOne {
                    margin-top: 20px;
                }

                .desFour {
                    margin-top: 40px;
                }

                .desFive {
                    margin-top: 20px;
                }
            }

            .menu {
                display: flex;
                justify-content: space-around;
                margin-left: 20px;
                margin-top: 60px;

                .menu_link {

                    .jap {
                        text-decoration: none;
                        color: #131840;
                    }

                    .eng {
                        font-size: 8pt;
                        color: #BAA97D;
                        text-decoration: none;
                    }
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

@media screen and (min-width: 300px) and (max-width: 430px) {
    .footerShow {

        .top {
            display: block;

            .topLeft {

                .address {
                    font-size: 0.6rem;
                    margin-top: 20px;
                }

                .license {
                    margin-top: 30px;
                    margin-left: 15%;
                    font-size: 0.7rem;
                }
            }

            .topRight {
                margin-right: 10%;
                display: none;
            }
        }

        .bottom {

            p {
                font-size: 0.8rem;
            }
        }
    }
}
</style>