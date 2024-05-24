<script>
import Banner from '../components/Banner.vue';
export default {
    name: 'Scrivener',
    components: {
        Banner,
        RouterView
    },
    data() {
        return {
            bannerImage: '/Tokyo.jpg',
            bannerTextOne: 'お客様に感動を提供し、',
            bannerTextTwo: '社会の発展に貢献',
        }
    },
    methods: {},
    mounted() { }
}
</script>

<template>
    <div class="scrivener">
        <div class="scrivener_banner">
            <Banner :imgSrc="bannerImage" :textOne="bannerTextOne" :textTwo="bannerTextTwo" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.scrivener{
    width: 100vw;
    height: 60vh;
    .scrivener_banner {
        width: 100vw;
        height: 60vh;
    }
}

</style>
