<script>
</script>

<template>
    <div class="inquiry_main">
        <div class="inquiry_title">
            <p class="inquiry_title_text">お問い合わせ</p>
            <p class="inquiry_title_text_en">INQUIRY</p>
        </div>
        <div class="inquiry_form_block">
            <form action="" class="inquiry_form">
                <div class="inquiry_form_content_block">
                    <label for="" class="inquiry_form_content">內容</label>
                    <select class="inquiry_form_content_select">
                        <option>選択してください</option>
                    </select>
                </div>
                <div class="inquiry_form_name_block">
                    <label for="" class="inquiry_form_name">お名前</label>
                    <input type="text" class="surname" placeholder="はやし">
                    <input type="text" class="firstName" placeholder="太郎">
                </div>
                <div class="inquiry_form_singleChoice_block">
                    <input type="radio" class="singleChoice_radio1 radio">
                    <label for="" class="singleChoice_phone">電話/携帯</label>
                    <input type="radio" class="singleChoice_radio2 radio">
                    <label for="" class="singleChoice_mail">メール</label>
                </div>
                <div class="inquiry_form_phone_block">
                    <label for="" class="inquiry_form_phone">電話番号</label>
                    <input type="text" class="inquiry_form_namber_text">
                </div>
                <div class="inquiry_form_mail_block">
                    <label for="" class="inquiry_form_mail">メール</label>
                    <input type="text" class="inquiry_form_mail_text">
                </div>
                <div class="inquiry_form_mail_check_block">
                    <label for="" class="inquiry_form_mail_check">メール</label>
                    <input type="text" class="inquiry_form_mail_check_text">
                </div>
                <div class="inquiry_form_message_block">
                    <label for="" class="inquiry_form_message">メッセージ</label>
                    <input type="text" class="inquiry_form_message_text">
                </div>
                <input type="submit" value="送信" class="submitBtn" />
            </form>
        </div>
        <img src="../../public/index_contact_pic.svg" alt="" class="pic_man">
    </div>
</template>

<style scoped lang="scss">
.inquiry_main {
    background-color: #F6F6F6;
    padding-top: 5%;
    box-sizing: border-box;
    position: relative;

    .inquiry_title {
        width: 15%;
        height: 5%;

        margin-left: 20%;

        .inquiry_title_text {
            font-weight: bold;
            font-size: 1.5rem;
        }

        .inquiry_title_text_en {
            color: #BAA97D;
            font-size: 1.1rem;
        }
    }

    .inquiry_form_block {
        width: 50%;
        height: 60%;
        margin-top: 5%;
        margin-left: 20%;

        .inquiry_form_content_block {
            margin-top: 3%;

            .inquiry_form_content {
                font-size: 1.1rem;
            }

            .inquiry_form_content_select {
                width: 70%;
                height: 35px;
                border: white 0pt;
                margin-left: 7%;
            }
        }

        .inquiry_form_name_block {
            margin-top: 3%;

            .inquiry_form_name {
                font-size: 1.1rem;
            }

            .surname {
                width: 33%;
                height: 35px;
                border: white 0pt;
                margin-left: 5.5%;
            }

            .firstName {
                width: 33%;
                height: 35px;
                border: white 0pt;
                margin-left: 2.5%;
            }
        }

        .inquiry_form_singleChoice_block {
            margin-top: 3%;

            .singleChoice_radio1 {
                margin-left: 13%;
            }

            .singleChoice_radio2 {
                margin-left: 2%;
            }

            .singleChoice_phone {
                margin-left: 1%;
                font-size: 1.1rem;
            }

            .singleChoice_mail {
                margin-left: 1%;
                font-size: 1.1rem;
            }
        }

        .inquiry_form_phone_block {
            margin-top: 3%;

            .inquiry_form_phone {
                font-size: 1.1rem;
            }

            .inquiry_form_namber_text {
                width: 69%;
                height: 35px;
                border: white 0pt;
                margin-left: 3.8%;
            }
        }

        .inquiry_form_mail_block {
            margin-top: 3%;

            .inquiry_form_mail {
                font-size: 1.1rem;
            }

            .inquiry_form_mail_text {
                width: 69%;
                height: 35px;
                border: white 0pt;
                margin-left: 5.5%;
            }
        }

        .inquiry_form_mail_check_block {
            margin-top: 3%;

            .inquiry_form_mail_check {
                font-size: 1.1rem;
            }

            .inquiry_form_mail_check_text {
                width: 69%;
                height: 35px;
                border: white 0pt;
                margin-left: 5.5%;
            }

            &::before {
                content: '(確認用)';
                position: absolute;
                top: 55%;
                left: 20.5%;
                color: #000000;
                z-index: 1;
                font-size: 0.6rem;
            }

        }


        .inquiry_form_message_block {
            margin-top: 3%;

            .inquiry_form_message {
                font-size: 1.1rem;
            }

            .inquiry_form_message_text {
                width: 69%;
                height: 200px;
                border: white 0pt;
                margin-left: 1.9%;
            }
        }

        .submitBtn {
            width: 20%;
            height: 40px;
            background-color: #131840;
            color: #fff;
            border-radius: 2pt;
            margin-top: 10%;
            margin-left: 35%;
            margin-bottom: 10%;
            font-size: 1rem;
        }

    }

    .pic_man {
        position: absolute;
        width: 20%;
        height: 50%;
        top: 50.5%;
        left: 65%;
    }

    &::before {
        content: '';
        position: absolute;
        top: 45%;
        left: 85%;
        width: 10%;
        height: 0.2%;
        background-color: #BAA97D;
        z-index: 1;
        transform: rotate(165deg);
        transform-origin: center center;
    }

    &::after {
        content: 'お気軽にどうぞ';
        position: absolute;
        top: 43%;
        left: 80%;
        color: #131840;
        z-index: 1;
        transform: rotate(-25deg);
        transform-origin: center center;
    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .inquiry_main {
        background-color: #F6F6F6;
        padding-top: 5%;
        box-sizing: border-box;
        position: relative;

        .inquiry_title {
            width: 15%;
            height: 5%;
            margin-left: 20%;

            .inquiry_title_text {
                font-weight: bold;
                font-size: 1rem;
                width: 120px;
            }

            .inquiry_title_text_en {
                color: #BAA97D;
                font-size: 0.6rem;
            }
        }

        .inquiry_form_block {
            width: 50%;
            height: 60%;
            margin-top: 5%;
            margin-left: 20%;

            .inquiry_form_content_block {
                margin-top: 3%;

                .inquiry_form_content {
                    font-size: 0.6rem;
                }

                .inquiry_form_content_select {
                    width: 73%;
                    height: 23px;
                    margin-left: 16%;
                }
            }

            .inquiry_form_name_block {
                margin-top: 3%;

                .inquiry_form_name {
                    font-size: 0.6rem;
                }

                .surname {
                    width: 35%;
                    height: 23px;
                    margin-left: 11.5%;
                }

                .firstName {
                    width: 35%;
                    height: 23px;
                }
            }

            .inquiry_form_singleChoice_block {
                margin-top: 3%;

                .singleChoice_radio1 {
                    margin-left: 27%;
                }

                .singleChoice_radio2 {
                    margin-left: 2%;
                }

                .singleChoice_phone {
                    margin-left: 1%;
                    font-size: 0.6rem;
                }

                .singleChoice_mail {
                    margin-left: 1%;
                    font-size: 0.6rem;
                }
            }

            .inquiry_form_phone_block {
                margin-top: 3%;

                .inquiry_form_phone {
                    font-size: 0.6rem;
                }

                .inquiry_form_namber_text {
                    width: 72%;
                    height: 23px;
                    margin-left: 6.8%;
                }
            }

            .inquiry_form_mail_block {
                margin-top: 3%;

                .inquiry_form_mail {
                    font-size: 0.6rem;
                }

                .inquiry_form_mail_text {
                    width: 72%;
                    height: 23px;
                    margin-left: 12%;
                }
            }

            .inquiry_form_mail_check_block {
                margin-top: 3%;

                .inquiry_form_mail_check {
                    font-size: 0.6rem;
                }

                .inquiry_form_mail_check_text {
                    width: 72%;
                    height: 23px;
                    margin-left: 12%;
                }
            }

            .inquiry_form_message_block {
                margin-top: 3%;

                .inquiry_form_message {
                    font-size: 0.6rem;
                }

                .inquiry_form_message_text {
                    width: 72%;
                    height: 200px;
                    border: white 0pt;
                    margin-left: 1.9%;
                }
            }

            .submitBtn {
                margin-left: 52%;
                font-size: 0.5rem;
            }

        }

        .pic_man {
            display: none;
        }

        &::before {
            display: none;
        }

        &::after {
            display: none;
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .inquiry_main {
        background-color: #F6F6F6;
        padding-top: 5%;
        box-sizing: border-box;
        position: relative;

        .inquiry_title {
            width: 15%;
            height: 5%;

            margin-left: 20%;

            .inquiry_title_text {
                font-weight: bold;
                font-size: 1.5rem;
                width: 200px;
            }

            .inquiry_title_text_en {
                color: #BAA97D;
                font-size: 1.1rem;
            }
        }

        .inquiry_form_block {
            width: 50%;
            height: 60%;
            margin-top: 5%;
            margin-left: 20%;

            .inquiry_form_content_block {
                margin-top: 3%;

                .inquiry_form_content {
                    font-size: 1rem;
                }

                .inquiry_form_content_select {
                    width: 70%;
                    height: 35px;
                    border: white 0pt;
                    margin-left: 12%;
                }
            }

            .inquiry_form_name_block {
                margin-top: 3%;

                .inquiry_form_name {
                    font-size: 1rem;
                }

                .surname {
                    width: 33%;
                    height: 35px;
                    border: white 0pt;
                    margin-left: 5.5%;
                    margin-left: 9%;
                }

                .firstName {
                    width: 33%;
                    height: 35px;
                    border: white 0pt;
                    margin-left: 2.5%;
                }
            }

            .inquiry_form_singleChoice_block {
                margin-top: 3%;

                .singleChoice_radio1 {
                    margin-left: 20%;
                }

                .singleChoice_radio2 {
                    margin-left: 2%;
                }

                .singleChoice_phone {
                    margin-left: 1%;
                    font-size: 1rem;
                }

                .singleChoice_mail {
                    margin-left: 1%;
                    font-size: 1rem;
                }
            }

            .inquiry_form_phone_block {
                margin-top: 3%;

                .inquiry_form_phone {
                    font-size: 1rem;
                }

                .inquiry_form_namber_text {
                    width: 69%;
                    height: 35px;
                    border: white 0pt;
                    margin-left: 1.5%;
                    margin-left: 6%;
                }
            }

            .inquiry_form_mail_block {
                margin-top: 3%;

                .inquiry_form_mail {
                    font-size: 1rem;
                }

                .inquiry_form_mail_text {
                    width: 69%;
                    height: 35px;
                    border: white 0pt;
                    margin-left: 10%;
                }
            }

            .inquiry_form_mail_check_block {
                margin-top: 3%;

                .inquiry_form_mail_check {
                    font-size: 1rem;
                }

                .inquiry_form_mail_check_text {
                    width: 69%;
                    height: 35px;
                    border: white 0pt;
                    margin-left: 10%;
                }
            }

            .inquiry_form_message_block {
                margin-top: 3%;

                .inquiry_form_message {
                    font-size: 1rem;
                }

                .inquiry_form_message_text {
                    width: 69%;
                    height: 200px;
                    border: white 0pt;
                    margin-left: 2;
                }
            }

            .submitBtn {
                width: 20%;
                height: 40px;
                background-color: #131840;
                color: #fff;
                border-radius: 2pt;
                margin-top: 10%;
                margin-left: 43%;
                margin-bottom: 10%;
                font-size: 1rem;
            }

        }

        .pic_man {
            position: absolute;
            width: 20%;
            height: 50%;
            top: 56%;
            left: 70%;
        }

        &::before {
            content: '';
            position: absolute;
            top: 56%;
            left: 85%;
            width: 10%;
            height: 0.2%;
            background-color: #BAA97D;
            z-index: 1;
            transform: rotate(165deg);
            transform-origin: center center;
        }

        &::after {
            content: 'お気軽にどうぞ';
            position: absolute;
            top: 53%;
            left: 80%;
            color: #131840;
            z-index: 1;
            transform: rotate(-25deg);
            transform-origin: center center;
        }
    }
}
</style>