<script>

</script>

<template>
    <div class="picture">
        <img class="picture_banner" src="../../public/istockphoto-1328151393-1024x1024.jpg" alt="">
        <h2 class="one text">お客様に感動を提供し、</h2>
        <h2 class="two text">社会の発展に貢献</h2>
    </div>
</template>

<style scoped lang="scss">
.picture {
    width: 100%;
    height: 120%;
    position: relative;

    .picture_banner {
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
</style>