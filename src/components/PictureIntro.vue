<script>
</script>

<template>
<div class="content">
    <img class="content_picture" src="../../public/istockphoto-1339197512-1024x1024.jpg" alt="">
    <div class="content_text">
        <div class="content_text_title">
            <h2 class="content_text_title_h2">法務</h2>
            <h3 class="content_text_title_h3">LEGAL AFFAIRS</h3>
        </div>
        <div class="content_text_intro">
            <p class="content_text_intro_p1">弊社と提携する学院は多所があり、学生に豊富なコースが選択できます。日本語学校を卒業後、学生自身の状況に応じた様々な進路を推薦します。</p>
            <p class="content_text_intro_p2">日本語学校が修了後、大学に落ちた留学生を提携大学への入学を推薦します。</p>
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
        .content_text_title::before {
                content: "";
                position: absolute;
                width: 5%;
                height: 2%;
                background-color: #000;
                left: 12.5%;
                transform: translateX(-50%);
                bottom: 60%;
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
}
</style>