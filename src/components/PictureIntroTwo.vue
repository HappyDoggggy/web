<script>
export default {
    name: 'PictureIntro',
    props: {
        imgSrc1: {
            type: String,
            required: true
        },
        imgSrc2: {
            type: String,
            required: true
        },
        imgSrc3: {
            type: String,
            required: true
        },
        text1: {
            type: String,
            required: true
        },
        text2: {
            type: String,
            required: true
        },
        text3: {
            type: String,
            required: true
        },
        text4: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="content">
        <div class="pic">
                <img class="content_picture1" :src="imgSrc1" alt="">
                <img class="content_picture2" :src="imgSrc2" alt="">
                <img class="content_picture3" :src="imgSrc3" alt="">
        </div>

        <div class="content_text">
            <div class="content_text_title">
                <h2 class="content_text_title_h2">{{ this.text1 }}</h2>
                <h3 class="content_text_title_h3">{{ this.text2 }}</h3>
            </div>
            <div class="content_text_intro">
                <p class="content_text_intro_p1">{{ this.text3 }}</p>
                <p class="content_text_intro_p2">{{ this.text4 }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content {
    width: 100%;
    height: 100%;
    position: relative;


    .pic {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        .content_picture1 {
            width: 30%;
            height: 100%;
            margin-top: 5%;
        }
        .content_picture2 {
            width: 30%;
            height: 100%;
            margin-top: 5%;
        }
        .content_picture3 {
            width: 30%;
            height: 100%;
            margin-top: 5%;
        }
    }

    .content_text {
        width: 80%;
        height: 50%;
        background-color: white;
        border-radius: 20pt;
        position: absolute;
        left: 18%;
        bottom: -20%;

        .content_text_title {
            margin-top: 4%;
            margin-left: 10%;

            .content_text_title_h2 {
                font-size: 2rem;
            }

            .content_text_title_h3 {
                color: #B09D6B;
            }

        }

        .content_text_title::before {
            content: "";
            position: absolute;
            width: 3%;
            height: 2%;
            background-color: #000;
            left: 11.5%;
            transform: translateX(-50%);
            bottom: 57%;
        }

        .content_text_intro {
            margin-top: 4%;
            margin-left: 10%;
            margin-right: 10%;

            .content_text_intro_p2 {
                margin-top: 3%;
            }
        }
    }
}
</style>