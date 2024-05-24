<script>
</script>

<template>
    <div class="history">
        <div class="history_title">
            <h1 class="history_title_eng">HISTORY</h1>
        </div>
        <div class="history_time">
            <p class="history_time_1 time">1994年 / 06月</p>
            <p class="history_time_2 time">2017年 / 07月</p>
            <p class="history_time_3 time">2019年 / 10月</p>
            <p class="history_time_4 time">2020年 / 02月</p>
        </div>
        <div class="history_text">
            <p class="history_text_1 text">有限会社ジェーアルシー 設立</p>
            <p class="history_text_2 text">ビザ＆法務部門 設立</p>
            <p class="history_text_3 text">有料紹介＆労働派遣部門設立</p>
            <p class="history_text_4 text">登録支援機関許可取得</p>
            <p class="history_text_5 text">不動産部門設立</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.history {
    display: flex;
    position: relative;

    .history_title {
        position: absolute;
        margin-left: 8%;
        margin-top: 5%;

        .history_title_eng {
            color: #131840;
            writing-mode: vertical-rl;
        }
    }

    .history_time {
        position: absolute;
        margin-left: 20%;
        margin-top: 5%;

        .time {
            margin-top: 26%;
        }

        .history_time_2 {
            margin-top: 50%;
        }

        .history_time_3 {
            margin-top: 30%;
        }

        .history_time_4 {
            margin-top: 28%;
        }

        .history_time_1::before {
            content: "";
            position: absolute;
            width: 1.5px;
            height: 130%;
            background-color: #C5C5C5;
            left: -34%;
            bottom: -28%;
        }

        .history_time_1::after {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 20px;
            background-color: #131840;
            left: -40%;
            bottom: 80%;
        }

        .history_time_2::before {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 20px;
            background-color: #131840;
            left: -40%;
            bottom: 48%;
        }

        .history_time_2::after {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 20px;
            background-color: #131840;
            left: -40%;
            bottom: 23%;
        }

        .history_time_3::before {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 20px;
            background-color: #131840;
            left: -40%;
            bottom: 2%;
        }
    }

    .history_text {
        position: absolute;
        margin-left: 33%;
        margin-top: 4.5%;

        .text {
            margin-top: 15%;
        }

        .history_text_2 {
            margin-top: 0%;
        }
    }
}
</style>