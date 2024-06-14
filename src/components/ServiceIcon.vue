<script>
export default {
    data() {
        return {
            serviceIconList: [
                { icon_picture: "lawIcon.jpg", icon_h2: "法務", icon_p: "SCRIVENER" },
                { icon_picture: "buildingIcon.jpg", icon_h2: "不動產", icon_p: "REAL ESTATE" },
                { icon_picture: "visaIcon.jpg", icon_h2: "ビザ", icon_p: "VISA" },
            ]
        }
    },
}
</script>

<template>
    <div class="service">
        <div class="title">
            <h2 class="one text">SERVICE</h2>
            <p class="two text">サービズ</p>
        </div>
        <div class="serviceIcon">
            <div class="icon" v-for="(item, index) in serviceIconList" :key="index">
                <img class="icon_picture" :src="item.icon_picture" alt="">
                <h2 class="icon_h2">{{ item.icon_h2 }}</h2>
                <p class="icon_p">{{ item.icon_p }}</p>
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
        justify-content: space-evenly;
        align-items: center;

        .icon {
            width: 300px;
            height: 300px;
            background-color: white;
            border-radius: 50%;
            text-align: center;

            .icon_picture {
                width: 200px;
                height: 200px;
                margin-top: 37px;
            }

            .icon_p {
                color: #BAA97D;
                margin-left: 70px;
            }
        }

    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .service {
        .title{
            height: 10%;
            .one{
                font-size: 1.2rem;
            }
            .two{
                font-size: 0.6rem;
            }
        }
        .serviceIcon {
            display: block;
            padding-left: 25%;
            .icon{
                width: 180px;
                height: 180px;
                margin-bottom: 8%;
                .icon_picture{
                    width: 80px;
                    height: 80px;
                }
                .icon_h2{
                    font-size: 1.1rem;
                }
                .icon_p{
                    font-size: 0.7rem;
                }
            }
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .service {
        .title {
            box-sizing: border-box;
            padding-top: 10%;
        }

        .serviceIcon {
            .icon {
                width: 250px;
                height: 250px;

                .icon_picture {
                    width: 150px;
                    height: 150px;
                }
            }

        }
    }
}
</style>