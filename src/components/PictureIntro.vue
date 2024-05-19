<script>
</script>

<template>
<div class="intro">
    <div class="picture">
        
    </div>
    <div class="text">
        <div class="title">
            <h2>法務</h2>
            <h3>LEGAL AFFAIRS</h3>
            <div class="line"></div>
        </div>
        <div class="introOne">
            <p>弊社と提携する学院は多所があり、学生に豊富なコースが選択できます。日本語学校を卒業後、学生自身の状況に応じた様々な進路を推薦します。</p>
            <p>日本語学校が修了後、大学に落ちた留学生を提携大学への入学を推薦します。</p>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.intro{
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding-left: 35%;

    .picture{
        width: 90%;
        height: 90%;
        background-image: url(../../public/istockphoto-1339197512-1024x1024.jpg);
        background-repeat: no-repeat;
        background-size: contain;
        margin-left: 10%;
    }
    .text{
        width: 40%;
        height: 50%;
        background-color: white;
        border-radius: 20pt;
        position: absolute;
        left: 20%;
        bottom: 2%;
        .title{
            box-sizing: border-box;
            padding-top: 8%;
            padding-left: 10%;
            .line{
                border-top: 5pt black solid;
                width: 5%;
                margin-top: 3%;
                margin-bottom: 3%;
            }
            h2{
                font-size: 24pt;
            }
            h3{
                color: #B09D6B;
            }
        }
        .introOne{
            box-sizing: border-box;
            padding-left: 10%;
            padding-right: 10%;
            p{
                margin-top: 3%;
            }
        }
    }
}
</style>