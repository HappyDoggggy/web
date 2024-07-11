<script>
export default {
    name: 'Title',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="title_block">
        <p class="title block enWord">
            {{ this.title }}
        </p>
        <p class="subtitle block">
            {{ this.subtitle }}
        </p>
    </div>
</template>

<style scoped lang="scss">
.title_block {
    margin: 0 auto;
    margin-top: 40%;
    width: 200px;

    .title {
        width: 100%;
        height: 60%;
        margin-bottom: 3%;
        font-size: 2rem;
    }

    .subtitle {
        width: 100%;
        height: 30%;
        font-size: 0.8rem;
    }

    .block {
        color: #131840;
        font-weight: bold;
    }
}

@media screen and (min-width: 300px) and (max-width: 430px){

    .title_block{
        .title{
            font-size: 1.3rem;
        }
        .subtitle{
            font-size: 0.8rem;
            width: 100px;
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px){
    .title_block{
        // margin-left: 12%;
    }
}
</style>