<script>
</script>

<template>
    <div class="main">
        <div class="circleArea">
            <div class="circle">
                <div class="textArea">
                    <div class="mainText">ABOUT　US</div>
                    <div class="subText">会社案内</div>
                </div>
            </div>
        </div>
        <div class="line"></div>
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
.main {
    width: 100%;
    height: 100%;
    position: relative;

    .circleArea {
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
            z-index: 3;

            .textArea {
                width: 50%;
                height: 35%;
                margin-top: 60%;
                margin-left: 3.5%;

                .mainText {
                    width: 100%;
                    height: 45%;
                    font-size: 23pt;
                    color: #FFFFFF;
                    margin-left: 5%;
                }

                .subText {
                    width: 25%;
                    height: 15%;
                    font-size: 10pt;
                    margin-left: 33%;
                    color: #BAA97D;
                }
            }

        }
    }

    .line {
        width: 0.05%;
        height: 13%;
        background-color: #BAA97D;
        margin-left: 50%;
        z-index: 4;
        position: absolute;
        bottom: 23%;
    }

    .mainIntro {
        margin-top: 3%;
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