<script>
</script>

<template>
    <div class="service">
        <div class="title">
            <h2 class="one text">SERVICE</h2>
            <p class="two text">サービズ</p>
        </div>
        <div class="serviceIcon">
            <div class="first icon">
                <div class="left circle">
                    <h2 class="law">法務</h2>
                    <p class="lawEng">SCRIVENER</p>
                </div>
            </div>
            <div class="second icon">
                <div class="middle circle">
                    <h2 class="house">不動産</h2>
                    <p class="houseEng">REAL ESTATE</p>
                </div>
            </div>
            <div class="third icon">
                <div class="right circle">
                    <h2 class="visa">ビザ</h2>
                    <p class="visaEng">VISA</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.service {
    background-color: #131840;
    width: 100%;
    height: 100%;

    .title {
        width: 100%;
        height: 30%;
        background-color: #131840;
        box-sizing: border-box;
        padding-top: 3%;

        .text {
            text-align: center;
        }

        .one {
            color: white;
            font-size: 1.8rem;
        }

        .two {
            color: #BAA97D;
            font-size: 1rem;
            margin-top: 1%;
        }
    }

    .serviceIcon {
        width: 100%;
        height: 70%;
        background-color: #131840;
        display: flex;
        justify-content: space-around;

        .icon {
            width: 30%;
            height: 100%;
            background-color: #131840;
            display: flex;
            align-items: center;
            justify-content: space-around;

            .circle {
                width: 260px;
                height: 260px;
                background-color: white;
                border-radius: 50%;
                margin-bottom: 20%;
            }

            .left {
                background-image: url(../../public/messageImage_1716175906281.jpg);
                background-repeat: no-repeat;
                background-size: 63% 65%;
                background-position: 50% 20%;

                .law {
                    text-align: center;
                    margin-top: 63%;
                    font-size: 2rem;
                }

                .lawEng {
                    margin-left: 50%;
                    font-size: 1.2rem;
                    color: #BAA97D;
                }
            }

            .middle {
                background-image: url(../../public/messageImage_1716185709244.jpg);
                background-repeat: no-repeat;
                background-size: 63% 65%;
                background-position: 50% 20%;

                .house {
                    text-align: center;
                    margin-top: 63%;
                    font-size: 2rem;
                }

                .houseEng {
                    margin-left: 46%;
                    font-size: 1.2rem;
                    color: #BAA97D;
                }
            }

            .right {
                background-image: url(../../public/messageImage_1716185723500.jpg);
                background-repeat: no-repeat;
                background-size: 63% 65%;
                background-position: 50% 20%;

                .visa {
                    text-align: center;
                    margin-top: 63%;
                    font-size: 2rem;
                }

                .visaEng {
                    margin-left: 52%;
                    font-size: 1.2rem;
                    color: #BAA97D;
                }
            }
        }
    }
}
</style>