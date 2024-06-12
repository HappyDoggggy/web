<script>
</script>

<template>
<div class="wechat">
    <div class="wechat_content">
        <div class="wechat_content_text">
            <p class="wechat_content_text_p1">一番信頼できるパートナー</p>
            <p class="wechat_content_text_p2">中華圏大人気ソーシャルアプリ</p>
            <p class="wechat_content_text_p3">WeChat、Xiaohongshuコツコツ経営10年以上</p>
        <div class="wechat_content_label">
            <div class="wechat_content_label1 label">実績あり</div>
            <div class="wechat_content_label2 label">経験豊富</div>
            <div class="wechat_content_label3 label">ワンステップ</div>
        </div>
        </div>
    </div>
    <div class="wechat_picture">
        <img class="phone" src="../../public/messageImage_1716272865920.jpg" alt="">
    </div>
</div>
</template>

<style scoped lang="scss">
.wechat{
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    .wechat_content{
        margin-top: 10%;
        width: 50%;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .wechat_content_text{
            .wechat_content_text_p1{
                font-size: 2rem;
                margin-bottom: 5%;
            }
            .wechat_content_text_p2{
                font-size: 1.2rem;
                margin-bottom: 2%;
            }
            .wechat_content_text_p3{
                font-size: 1.2rem;
            }
        }
        .wechat_content_label{
            display: flex;
            margin-top: 6%;
            .label{
                border: 2px solid #131840;
                background-color: #131840;
                color: white;
                border-radius: 5px;
                font-size: 0.8rem;
            }
            .wechat_content_label1{
                width: 70px;
                margin-right: 15px;
                text-align: center;
                
            }
            .wechat_content_label2{
                width: 70px;
                margin-right: 15px;
                text-align: center;
            }
            .wechat_content_label3{
                width: 90px;
                margin-right: 15px;
                text-align: center;
            }
        }
    }
    .wechat_picture{
        display: flex;
        align-items: flex-end;
        width: 50%;
        height: 100%;
        .phone{
            width: 80%;
            height: 80%;
        }
    }
}

@media screen and (min-width: 300px) and (max-width: 430px){
    .wechat{
        display: block;
        .wechat_content{
            .wechat_content_text{
                margin-left: 10%;
            }
            .wechat_content_label{

            }
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px){
    .wechat{
        .wechat_content{
            margin-left: 5%;
            .wechat_content_text{
                .wechat_content_text_p1{
                    font-size: 1.8rem;
                }
            }
        }
        .wechat_picture{
            display: flex;
            justify-content:flex-end;
        }
    }
}
</style>