<script>

</script>

<template>
    <div class="contact">
        <h1 class="contact_title">CONTACT US</h1>
        <h2 class="contact_text">ご依頼、ご相談などお気軽にお問い合わせください。</h2>
        <button class="contact_button" type="button">お問い合わせ</button>
    </div>
</template>

<style scoped lang="scss">
.contact {
    height: 100%;
    width: 100%;
    background-color: #131840;
    position: relative;
    text-align: center;

        .contact_title {
            color: white;
            text-align: center;
            box-sizing: border-box;
            padding-top: 50px;
        }
        .contact_title::before {
                content: "";
                position: absolute;
                width: 26%;
                height: 0.8%;
                background-color: white;
                left: 49.5%;
                transform: translateX(-50%);
                bottom: 60%;
            }
        
        .contact_text {
            color: white;
            margin-top: 80px;
        }

        .contact_button {
            width: 140px;
            height: 40px;
            background-color: #BAA97D;
            border-radius: 20px;
            border: 0px;
            color: white;
            margin-top: 45px;
        }
}
</style>