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
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .contact_title {
        position: relative;
        color: white;
        text-align: center;
        box-sizing: border-box;

        &::before {
            content: "";
            position: absolute;
            width: 200%;
            height: 2px;
            background-color: white;
            transform: translateX(-25%);
            left: 0;
            top: 10vh;
        }
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
        cursor: pointer;
    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .contact {
        height: 80%;


        .contact_text {
            margin-top: 40px;
            font-size: 0.8rem;
        }

        .contact_title {
            font-size: 1.2rem;

            &::before {
                top: 40px;
                left: 0;
                width: 200%;
            }
        }

        .contact_button {
            width: 100px;
            height: 30px;
            font-size: 0.7rem;
            margin-top: 20px;
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .contact {
        height: 100%;


        .contact_text {
            margin-top: 85px;
            font-size: 1.6rem;
        }

        .contact_title {
            font-size: 2rem;

            &::before {
                bottom: 0;
                width: 200%;
                height: 2px;
                left: 0;
                top: 180%;
            }
        }

        .contact_button {
            font-size: 1.1rem;
        }
    }
}
</style>