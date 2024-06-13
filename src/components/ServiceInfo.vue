<script>
export default {
    name: 'ServiceInfo',
    props: {
        serviceInfo_title_h2: {
            type: String,
            required: true
        },
        serviceInfo_title_p: {
            type: String,
            required: true
        },
        serviceInfo_content_p: {
            type: String,
            required: true
        },
    }
}
</script>

<template>
    <div class="serviceInfo">
        <div class="serviceInfo_title">
            <h2 class="serviceInfo_title_h2">{{ this.serviceInfo_title_h2 }}</h2>
            <p class="serviceInfo_title_p">{{ this.serviceInfo_title_p }}</p>
        </div>
        <div class="serviceInfo_content">
            <p class="serviceInfo_content_p">{{ this.serviceInfo_content_p }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.serviceInfo {
    position: relative;
    margin-right: 22%;
    height: 12vh;

    .serviceInfo_title::before {
        content: "";
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: #BAA97D;
        left: -10%;
        bottom: 4%;
        transform: translateX(-50%);
    }

    .serviceInfo_title {
        width: 31vw;
        margin-bottom: 2%;

        .serviceInfo_title_h2 {
            font-size: 1.4rem;
        }
    }

    .serviceInfo_content {
        width: 31vw;
    }

}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .serviceInfo {

        .serviceInfo_title::before {
            height: 70%;
            bottom: 0;
            top: 0;
        }

        .serviceInfo_title {

            .serviceInfo_title_h2 {
                font-size: 0.8rem;
            }

            .serviceInfo_title_p {
                font-size: 0.5rem;
            }
        }

        .serviceInfo_content {
            .serviceInfo_content_p {
                font-size: 0.5rem;
                // width: 200px;
            }
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .serviceInfo {
        .serviceInfo_title::before {
            content: "";
            position: absolute;
            width: 2px;
            height: 10dvh;
            left: -10%;
            bottom: 15%;
        }
    }
}
</style>