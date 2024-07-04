<script>
</script>

<template>
    <div class="realEstateIcon">
        <div class="realEstateIcon_picture">
            <div class="realEstateIcon_picture_1 picture">
                <img src="../../public/ICON1.png" alt="">
            </div>
            <div class="realEstateIcon_picture_2 picture">
                <img src="../../public/ICON2.png" alt="">
            </div>
            <div class="realEstateIcon_picture_3 picture">
                <img src="../../public/ICON3.png" alt="">
            </div>
            <div class="realEstateIcon_picture_4 picture">
                <img src="../../public/ICON4.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.realEstateIcon {
    .realEstateIcon_picture {
        display: flex;
        margin-left: 25%;

        .picture {
            width: 200px;

            img {
                width: 100%;
                height: 100%;
                max-width: 100%;
            }
        }
    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .realEstateIcon {
        .realEstateIcon_picture {
            margin-left: 10%;
            display: flex;

            .picture {
                img {
                    width: 80%;
                    height: 80%;
                }

                p {
                    margin-left: 5%;
                    color: #131840;
                    font-size: 0.5rem;
                }
            }

            .realEstateIcon_picture_4 {
                .realEstateIcon_picture_4_p4 {
                    margin-left: -10%;
                }
            }
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .realEstateIcon {
        .realEstateIcon_picture {
            margin-left: 9%;

            .picture {
                img {
                    width: 80%;
                    height: 80%;
                }

                p {
                    margin-left: 2%;
                }
            }

        }
    }
}
</style>