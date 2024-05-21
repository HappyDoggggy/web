<script>
</script>

<template>
    <div class="mainInfo_main">
        <div class="circle_block">
            <div class="circle">
                <div class="textArea">
                    <div class="mainInfo_text">ABOUT　US</div>
                    <div class="mainInfo_subText">会社案内</div>
                </div>
            </div>
        </div>
        <div class="mainIntro">
            <p class="mainIntroP 1">お客様のニーズをよく理解しており、</p>
            <p class="mainIntroP 2">お客様をより早く日本の社会に溶け込ませように頑張ります。</p>
        </div>
        <div class="subIntro">
            <p class="subIntro 3">行政書士事務所は1994年（平成6年）6月に設立され、会社の一番目の部門です。ビザに関する業務を行っております。</p>
            <p class="subIntro 4">特に民事、刑事訴訟、離婚、財産相続等の案件が得意です。成功率が80％以上でございます。豊富な経験を持っております。</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mainInfo_main {
    width: 100%;
    height: 100%;
    position: relative;

    .circle_block {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;

        .circle {
            width: 30%;
            height: 100%;
            background-color: #131840;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            // z-index: 3;

            .textArea {
                width: 50%;
                height: 35%;
                margin-top: 60%;
                margin-left: 3.5%;

                .mainInfo_text {
                    width: 100%;
                    height: 45%;
                    font-size: 23pt;
                    color: #FFFFFF;
                    margin-left: 5%;
                }

                .mainInfo_subText {
                    width: 25%;
                    height: 15%;
                    font-size: 10pt;
                    margin-left: 33%;
                    color: #BAA97D;
                }
            }

        }
        .circle::before {
                content: "";
                position: absolute;
                width: 2px;
                height: 23%;
                background-color:#BAA97D;
                left: 50%;
                transform: translateX(-50%);
                bottom: -14%;
            }
    }

    .mainIntro {
        margin-top: 5%;
        width: 100%;
        height: 13%;
        text-align: center;

        .mainIntroP {
            font-size: 10pt;
            font-weight: bold;
        }
    }

    .subIntro {
        width: 100%;
        height: 20%;
        text-align: center;

        .subIntro {
            font-size: 8pt;
        }
    }
}
</style>