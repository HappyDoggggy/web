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
        justify-content: center;
        margin: 0 auto;
        width: 70%;

        .picture {
            width: 20%;
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
            width: 92%;

            .picture {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .realEstateIcon {
        .realEstateIcon_picture {
            width: 87%;
            justify-content: space-around;
            .picture {
                img {
                    width: 100%;
                    height: 100%;
                }
            }

        }
    }
}
</style>