<script>
</script>

<template>
    <div class="news_main">
        <div class="news_text_block">
            <p class="news_text">NEWS</p>
        </div>
        <div class="news_news_block">
            <p class="news_news_date_1 date">2024.4.5</p>
            <a href="">
                <p class="news_news_info_1 info">【重要】弊社社員を装って営業活動をするに関する注意喚起について</p>
            </a>
            <p class="news_news_date_2 date">2024.4.5</p>
            <a href="">
                <p class="news_news_info_2 info">【重要】弊社社員を装って営業活動をするに関する注意喚起について</p>
            </a>
            <p class="news_news_date_3 date">2024.4.5</p>
            <a href="">
                <p class="news_news_info_3 info">【重要】弊社社員を装って営業活動をするに関する注意喚起について</p>
            </a>
        </div>
    </div>

</template>

<style scoped lang="scss">
.news_main {
    display: flex;
    position: relative;
    z-index: 2;

    &::before {
        content: '';
        position: absolute;
        top: 48%;
        left: 33%;
        width: 45%;
        height: 0.5%;
        background-color: #131840;
        z-index: 1;
    }

    &::after {
        content: '';
        position: absolute;
        top: 73%;
        left: 33%;
        width: 45%;
        height: 0.5%;
        background-color: #131840;
        z-index: 1;
    }

    .news_text_block {
        width: 10%;
        height: 10%;
        margin-top: 8%;
        margin-left: 10%;

        .news_text {
            font-size: 2rem;
            font-weight: bold;
        }
    }

    .news_news_block {
        width: 55%;
        height: 60%;
        margin-top: 6%;
        margin-left: 13%;

        .date {
            color: #BAA97D;
            font-size: 0.8rem;
            margin-left: 1%;
            margin-bottom: 1%;
        }

        .info {
            font-size: 1rem;
            margin-bottom: 3%;
            color: black;
        }

        a {
            text-decoration: none;
        }
    }

}
</style>