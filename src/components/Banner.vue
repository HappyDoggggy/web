<script>
export default {
    name: 'Banner',
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        textOne: {
            type: String,
            required: true
        },
        textTwo: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="banner">
        <img class="banner_picture" :src="imgSrc" alt="">
        <h2 class="one text">{{ this.textOne }}</h2>
        <h2 class="two text">{{ this.textTwo }}</h2>
    </div>
</template>

<style scoped lang="scss">
.banner {
    position: relative;

    .banner_picture {
        width: 100%;
        height: 100%;
    }

    .text {
        text-decoration: underline;
        font-size: 2.1rem;
        position: absolute;
        color: white;
    }

    .one {
        bottom: 17%;
        left: 5%;
    }

    .two {
        bottom: 7%;
        left: 5%;
    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .banner {
        .text {
            font-size: 1.7rem;
        }
    }
}
</style>