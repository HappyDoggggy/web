<script>

</script>

<template>
    <div class="contact">
        <div class="contactTop">
            <h1 class="bigTitle">CONTACT US</h1>
            <div class="link"></div>
        </div>
        <div class="contactBottom">
            <h2 class="text">ご依頼、ご相談などお気軽にお問い合わせください。</h2>
            <button class="click">お問い合わせ</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.contact {
    height: 100%;
    width: 100%;
    background-color: #131840;

    .contactTop {
        .bigTitle {
            color: white;
            text-align: center;
            box-sizing: border-box;
            padding-top: 50px;
        }

        .link {
            border-bottom: 1pt solid white;
            width: 26%;
            margin-left: 37%;
            margin-top: 40px;
        }
    }

    .contactBottom {
        text-align: center;
        .text {
            color: white;
            margin-top: 30px;
        }
        .click{
            width: 140px;
            height: 40px;
            background-color: #BAA97D;
            border-radius: 20px;
            border: 0px;
            color: white;
            margin-top: 30px;
        }
    }
}
</style>