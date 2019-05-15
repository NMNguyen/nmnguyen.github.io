<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <h2 class="p-3">
                Báo cáo ứng viên đã đăng ký
            </h2>
            <div>Apr 1st, 2019 - Apr 14th, 2019</div>
        </div>
        <div class="bg-light p-4 border rounded">
            <PhanTichTongQuan :range="time_range"></PhanTichTongQuan>
        </div>
        <div class="bg-light p-4 border rounded">
            <OverviewSourced></OverviewSourced>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import LineChart from '../Charts/LineChart.vue';
    import PhanTichTongQuan from "@/components/Analytics/Overview/PhanTichTongQuan.vue";
    import OverviewSourced from './OverviewSourced.vue';

    export default Vue.extend({
        name: "ReportOverview",
        props: {
            time_range: {
                type: Object,
                default: null,
            }
        },
        components: {
            PhanTichTongQuan,
            OverviewSourced,
        },
    });
</script>
