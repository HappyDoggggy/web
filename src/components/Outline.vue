<script>
</script>

<template>
    <div class="outline">
        <div class="outline_title">
            <h1 class="outline_title_eng">OUR OUTLINE</h1>
        </div>
        <div class="outline_content_one">
            <p class="outline_content_one_p p">商號</p>
            <p class="outline_content_one_p_1 p">代表者</p>
            <p class="outline_content_one_p_2 p">設立</p>
            <p class="outline_content_one_p_3 p">登記</p>
            <p class="outline_content_one_p_4 p">資本金</p>
            <p class="outline_content_one_p_5 p">從業人數</p>
            <p class="outline_content_one_p_6 p">事業內容</p>
        </div>
        <div class="outline_content_two">
            <p class="outline_content_two_p p">有限会社ジェーアルシー</p>
            <p class="outline_content_two_p_1 p">林　飛</p>
            <p class="outline_content_two_p_2 p">平成6年10月（要確認）</p>
            <p class="outline_content_two_p_3 p">平成27年10月5日（要確認）</p>
            <p class="outline_content_two_p_4 p">1,000万円（要確認）</p>
            <p class="outline_content_two_p_5 p">正社員6名、アルバイト1名（要確認）</p>
            <p class="outline_content_two_p_6 p">有限会社ジェーアルシー</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.outline {
    background-color: #131840;
    display: flex;
    position: relative;

    .outline_title {
        position: absolute;
        margin-top: 4.5%;
        margin-left: 8%;

        .outline_title_eng {
            color: white;
            writing-mode: vertical-rl;
        }

        .outline_title_eng::before {
            content: "";
            position: absolute;
            width: 2px;
            height: 148%;
            background-color: #BAA97D;
            left: 148%;
            bottom: -18%;
        }
    }

    .outline_content_one {
        position: absolute;
        margin-left: 20%;

        .p {
            color: #BAA97D;
            margin-top: 70%;
        }

        .outline_content_one_p::before {
            content: "";
            position: absolute;
            width: 6px;
            height: 4%;
            background-color: #BAA97D;
            left: -60%;
            bottom: 86%;
        }

        .outline_content_one_p::after {
            content: "";
            position: absolute;
            width: 6px;
            height: 4%;
            background-color: #BAA97D;
            left: -60%;
            bottom: 72%;
        }

        .outline_content_one_p_1::before {
            content: "";
            position: absolute;
            width: 6px;
            height: 4%;
            background-color: #BAA97D;
            left: -60%;
            bottom: 29%;
        }

        .outline_content_one_p_1::after {
            content: "";
            position: absolute;
            width: 6px;
            height: 4%;
            background-color: #BAA97D;
            left: -60%;
            bottom: 14.5%;
        }

        .outline_content_one_p_2::before {
            content: "";
            position: absolute;
            width: 6px;
            height: 4%;
            background-color: #BAA97D;
            left: -60%;
            bottom: 0%;
        }

        .outline_content_one_p_2::after {
            content: "";
            position: absolute;
            width: 40px;
            height: 40px;
            transform: rotate(45deg);
            border-radius: 5px;
            background-color: #BAA97D;
            left: 1150%;
            bottom: 96%;
        }

    }

    .outline_content_two {
        position: absolute;
        margin-left: 37%;

        .p {
            color: white;
            margin-top: 22.5%;
            font-size: 0.8rem;
        }

        .outline_content_two_p::before {
            content: "";
            position: absolute;
            width: 6px;
            height: 4%;
            background-color: #BAA97D;
            left: -133%;
            bottom: 57%;
        }
        .outline_content_two_p::after {
            content: "";
            position: absolute;
            width: 6px;
            height: 4%;
            background-color: #BAA97D;
            left: -133%;
            bottom: 43%;
        }
    }
}
</style>