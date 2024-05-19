<script>

</script>

<template>
    <div class="photo">
        <div class="text">
            <h2>お客様に感動を提供し、</h2>
            <h2>社会の発展に貢献</h2>
        </div>
    </div>
</template>

<style scoped lang="scss">
.photo {
    width: 100%;
    height: 100%;
    background-color: green;
    background-image: url(../../public/istockphoto-1328151393-1024x1024.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 80%;
    .text{
        width: 30vw;
        height: 10vw;
        // background-color: aquamarine;
        box-sizing: border-box;
        padding-top: 23%;
        padding-left: 5%;
        h2{
            text-decoration: underline;
            font-size: 25pt;
            color: white;
            margin-top: 2%;
        }
    }
}
</style>