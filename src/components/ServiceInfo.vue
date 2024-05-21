<script>
</script>

<template>
    <div class="serviceInfo">
        <div class="serviceInfo_title">
            <h2 class="serviceInfo_title_h2">法務とビザの専門家</h2>
            <p class="serviceInfo_title_p">Professional</p>
        </div>
        <div class="serviceInfo_content">
            <p class="serviceInfo_content_p">ニーズにお応え、プロの経験から提案し、より効率的に解決できます。</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.serviceInfo {
    margin-top: 12%;
    box-sizing: border-box;
    padding-left: 22%;
    position: relative;

    .serviceInfo_title::before {
        content: "";
        position: absolute;
        width: 2px;
        height: 39%;
        background-color: #BAA97D;
        left: 19.5%;
        transform: translateX(-50%);
        top: 0%;
    }

    .serviceInfo_title{
        margin-bottom: 2%;
        .serviceInfo_title_h2{
            font-size: 1.4rem;
        }
    }
    .serviceInfo_content{
        margin: 0 auto;
    }
}
</style>