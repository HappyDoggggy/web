<script>
export default {
    name: 'PictureIntro',
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        textOne: {
            type: String,
            required: true
        },
        textTwo: {
            type: String,
            required: true
        },
        textThree: {
            type: String,
            required: true
        },
        textFour: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
<div class="content">
    <img class="content_picture" :src="imgSrc" alt="">
    <div class="content_text">
        <div class="content_text_title">
            <h2 class="content_text_title_h2">{{ this.textOne }}</h2>
            <h3 class="content_text_title_h3">{{ this.textTwo }}</h3>
        </div>
        <div class="content_text_intro">
            <p class="content_text_intro_p1">{{ this.textThree }}</p>
            <p class="content_text_intro_p2">{{ this.textFour }}</p>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.content{
    width: 100%;
    height: 100%;
    position: relative;

    .content_picture{
        width: 70%;
        height: 100%;
        position: absolute;
        left: 30%;
        margin-top: 5%;
    }
    .content_text{
        width: 40%;
        height: 50%;
        background-color: white;
        border-radius: 20pt;
        position: absolute;
        left: 15%;
        bottom: -20%;
        .content_text_title{
            margin-top: 6%;
            margin-left: 10%;
            .content_text_title_h2{
                font-size: 2rem;
            }
            .content_text_title_h3{
                color: #B09D6B;
            }
            
        }
        
        .content_text_intro{
            margin-top: 8%;
            margin-left: 10%;
            margin-right: 10%;
            .content_text_intro_p2{
                margin-top: 3%;
            }
        }
    }
    .content_text::before {
                content: "";
                position: absolute;
                width: 5%;
                height: 2%;
                background-color: #000;
                left: 12.5%;
                transform: translateX(-50%);
                bottom: 60%;
            }
}

@media screen and (min-width: 431px) and (max-width: 1024px){
    .content{
        .content_picture{
            width: 100%;
            height: 80%;
            left: 0;
        }
        .content_text{
            width: 100%;
            left: 0;
        }
        .content_text::before{
                bottom: 65.5%;
            }
    }
}
</style>