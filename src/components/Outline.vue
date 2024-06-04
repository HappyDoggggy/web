<script>
export default {
    name: 'Outline',
    props: {
        outline_title: {
            type: String,
            required: true
        },
        outline_content: {
            type: String,
            required: true
        },
    }
}
</script>

<template>
    <div class="outline">
        <div class="outline_p">
            <p class="outline_title">{{ this.outline_title }}</p>
        </div>
            <p class="outline_content">{{ this.outline_content }}</p>
    </div>
</template>

<style scoped lang="scss">
.outline {
    display: flex;
    position: relative;
    .outline_p{
        width: 330px;
        .outline_title{
        color: #BAA97D;
        font-size: 1.2rem;
        margin-left: 15%;
    }

    }
    
    .outline_content{
        color: white;
        font-size: 1rem;
    }
    .outline_content::before {
            content: "";
            position: absolute;
            width: 5px;
            height: 25px;
            background-color: #BAA97D;
            left: 2%;
        }
}
</style>