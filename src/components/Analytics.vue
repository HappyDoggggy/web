<script>
</script>

<template>
    <div class="analytics_block">
        <div class="analytics_title">問合人数</div>
        <div class="analytics_title_en">ESTATE</div>
        <div class="analytics_data_block">
            <div class="analytics_data">2982</div>
            <div class="analytics_unit_block">
                <div class="analytics_unit">人</div>
                <div class="analytics_unit_up">up</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.analytics_block {

    .analytics_title {
        font-weight: bold;
        font-size: 1rem;
        margin-left: 1%;
    }

    .analytics_title_en {
        font-size: 8pt;
        color: #BAA97D;
        margin-left: 1%;
    }

    .analytics_data_block {
        display: flex;
        margin-left: 50px;

        .analytics_data {
            font-size: 30pt;
            margin-right: 3px;
        }

        .analytics_unit_block {
            margin-top: 10px;

            .analytics_unit {
                font-size: 10pt;
                margin-top: 30%;
            }

            .analytics_unit_up {
                color: #BAA97D;
                font-size: 0.67rem;
            }
        }
    }
}
</style>