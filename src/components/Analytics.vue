<script>
export default {
    name: 'Analytics',
    props: {
        analytics_title: {
            type: String,
            required: true
        },
        analytics_data: {
            type: Number,
            required: true
        },
        analytics_unit: {
            type: String,
            required: true
        },
    }
}
</script>

<template>
    <div class="analytics_block">
        <div class="analytics_title">{{this.analytics_title}}</div>
        <div class="analytics_title_en">ESTATE</div>
        <div class="analytics_data_block">
            <div class="analytics_data">{{this.analytics_data}}</div>
            <div class="analytics_unit_block">
                <div class="analytics_unit">{{ this.analytics_unit }}</div>
                <div class="analytics_unit_up">up</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">


    .analytics_title {
        font-weight: bold;
        font-size: 1rem;
        margin-left: 1%;
    }

    .analytics_title_en {
        font-size: 0.67rem;
        color: #BAA97D;
        margin-left: 1%;
    }

    .analytics_data_block {
        display: flex;
        position: relative;
        margin-left: 50px;

        .analytics_data {
            font-size: 2.5rem;
            margin-right: 3px;
        }

        .analytics_unit_block {
            position: absolute;
            right: 200px;
            top: 8px;

            .analytics_unit {
                font-size: 1rem;
                margin-top: 30%;
            }

            .analytics_unit_up {
                color: #BAA97D;
                font-size: 0.7rem;
            }
        }
    }

@media screen and (min-width: 300px) and (max-width: 430px){

    .analytics_block{
        width: 100%;
        height: 100px;
    }
    .analytics_title{
        font-size: 1rem;
    }
    .analytics_title_en{
        font-size: 0.5rem;
    }
    .analytics_data_block{
        margin-left: 25px;
        .analytics_data{
            font-size: 1rem;
        }
        .analytics_unit_block{
            position: absolute;
            right: 15px;
            top: 0px;
            .analytics_unit{
                font-size: 0.7rem;
                margin-top: 0;
            }
            .analytics_unit_up{
                font-size: 0.5rem;
            }
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px){
    .analytics_data_block {

        .analytics_data {
            font-size: 2.5rem;
            margin-right: 3px;
        }

        .analytics_unit_block {
            position: absolute;
            right: 35px;
            top: 8px;

            .analytics_unit {
                font-size: 1rem;
                margin-top: 30%;
            }

            .analytics_unit_up {
                color: #BAA97D;
                font-size: 0.7rem;
            }
        }
    }
}
</style>