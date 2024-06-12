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
            // margin-top: 10px;
            // margin-left: 12px;
            position: absolute;
            right: 0;

            .analytics_unit {
                font-size: 0.8rem;
                margin-top: 30%;
            }

            .analytics_unit_up {
                color: #BAA97D;
                font-size: 0.67rem;
            }
        }
    }

@media screen and (min-width: 300px) and (max-width: 430px){
    .analytics_title{
        font-size: 0.5rem;
    }
    .analytics_title_en{
        font-size: 0.2rem;
    }
    .analytics_data_block{
        margin-left: 25px;
        .analytics_data{
            font-size: 1.2rem;
        }
        .analytics_unit_block{
            .analytics_unit{
                font-size: 0.4rem;
            }
            .analytics_unit_up{
                font-size: 0.33rem;
            }
        }
    }
}
</style>