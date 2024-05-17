<script>
</script>

<template>
    <div class="dataArea">
        <div class="dataAreaTop">問合人数</div>
        <div class="dataAreaMiddle">ESTATE</div>
        <div class="dataAreaBottom">
            <div class="dataAreaBottomLeft">2982</div>
            <div class="dataAreaBottomRigt">
                <div class="dataAreaBottomRigt1">人</div>
                <div class="dataAreaBottomRigt2">up</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dataArea {
    width: 100%;
    height: 100%;


    .dataAreaTop {
        width: 80%;
        height: 25%;
        font-weight: bold;
        font-size: 12pt;
        margin-left: 5%;
    }

    .dataAreaMiddle {
        width: 80%;
        height: 10%;
        font-size: 8pt;
        color: #BAA97D;
        margin-left: 5%;
    }

    .dataAreaBottom {
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: right;

        .dataAreaBottomLeft {
            width: 45%;
            height: 70%;
            font-size: 30pt;
        }

        .dataAreaBottomRigt {
            width: 15%;
            height: 100%;

            .dataAreaBottomRigt1 {
                width: 100%;
                height: 40%;
                font-size: 10pt;
                margin-top: 32%;
            }

            .dataAreaBottomRigt2 {
                width: 100%;
                height: 30%;
                color: #BAA97D;
                font-size: 8pt;
            }
        }
    }
}
</style>