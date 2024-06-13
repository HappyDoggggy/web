<script>
export default {
    name: 'Outline',
    props: {
        history_time: {
            type: String,
            required: true
        },
        history_text: {
            type: String,
            required: true
        },
    }
}
</script>

<template>
    <div class="history">
        <div class="history_timeLine">
            <p class="history_time">{{ this.history_time }}</p>
        </div>
        <p class="history_text">{{ this.history_text }}</p>
    </div>
</template>

<style scoped lang="scss">
.history {
    display: flex;
    position: relative;

    .history_timeLine {
        width: 330px;
        margin-left: 3%;

        .history_time {
            color: #000000;
            font-size: 1.2rem;
            margin-left: 15%;
        }

    }

    .history_text {
        color: #000000;
        font-size: 1rem;
    }

    .history_text::before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 25px;
        background-color: #000000;
        left: 2%;
        top: 15%;
    }
}

@media screen and (min-width: 300px) and (max-width: 430px) {
    .history {

        .history_timeLine {
            width: 330px;
            margin-left: 3%;

            .history_time {
                font-size: 0.8rem;
                margin-left: 15%;
            }

        }

        .history_text {
            font-size: 0.6rem;
            width: 280px;
        }

        .history_text::before {
            width: 10px;
            height: 10px;
        }
    }
}

@media screen and (min-width: 431px) and (max-width: 1024px) {
    .history {
        .history_timeLine {
            width: 220px;
        }
    }
}
</style>