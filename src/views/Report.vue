<template>
    <div class="d-flex flex-column" style="height: 100%">
        <header class="py-3 px-4 flex-shrink-0 default-bg-color border">
            <h3>Báo cáo / Phân tích</h3>
        </header>
        <div class="flex-grow-1 overflow-auto d-flex">
            <div class="flex-shrink-0 p-4" style="max-width: 300px">
                <!-- Filter -->
                <b-dropdown :text="'Tất cả vị trí của công ty'"
                            variant="light"
                            class="my-2 custom-dropdown">
                    <template>
                        <b-dropdown-header tag="em">Hệ thống</b-dropdown-header>
                        <b-dropdown-item>Tất cả vị trí của công ty</b-dropdown-item>
                        <b-dropdown-item>Tất cả vị trí của tôi</b-dropdown-item>
                        <b-dropdown-item>Tất cả vị trí công khai của tôi</b-dropdown-item>
                    </template>
                    <template>
                        <b-dropdown-header tag="em">Vị trí</b-dropdown-header>
                        <b-dropdown-item>Dev</b-dropdown-item>
                        <b-dropdown-item>Tester</b-dropdown-item>
                    </template>
                </b-dropdown>
                <b-dropdown variant="light" class="my-2 custom-dropdown">
                    <template slot="button-content">
                        <i class="fas fa-clock"></i>&emsp;
                        {{time_range_input}}
                    </template>
                    <b-dropdown-item>Tất cả vị trí của công ty</b-dropdown-item>
                    <b-dropdown-item>Tất cả vị trí của tôi</b-dropdown-item>
                    <b-dropdown-item>Tất cả vị trí công khai của tôi</b-dropdown-item>
                </b-dropdown>
                <!-- Analytics types -->
                <div class="pt-3">
                    <h5 class="mx-2">Các loại báo cáo</h5>
                    <div class="px-2">
                        <b-list-group>
                            <b-list-group-item to="/analytics/overview">Tổng quan</b-list-group-item>
                            <b-list-group-item to="/analytics/applied">Ứng viên đã đăng ký</b-list-group-item>
                            <b-list-group-item to="/analytics/sourced">Báo cáo nguồn ứng viên</b-list-group-item>
                            <b-list-group-item to="/analytics/referred">Báo cáo ứng viên được đề nghị</b-list-group-item>
                            <b-list-group-item to="/analytics/recruited">Báo cáo ứng viên được tuyển dụng</b-list-group-item>
                            <b-list-group-item to="/analytics/pipeline-performance">Hiệu suất quy trình</b-list-group-item>
                            <b-list-group-item to="/analytics/time-to-fill">Báo cáo thời gian điền (Time to Fill)</b-list-group-item>
                            <b-list-group-item to="/analytics/questionaires">Bảng câu hỏi</b-list-group-item>
                            <b-list-group-item to="/analytics/open-positions">Vị trí trống</b-list-group-item>
                        </b-list-group>
                    </div>
                </div>
            </div>
            <div id="reportTypes" class="flex-grow-1 overflow-auto px-4">
                <router-view :time_range="time_range"></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import moment from 'moment';
    import ModalWrapper from "@/components/ModalWrapper.vue";

    export default Vue.extend({
        name: "AnalyticsPage",
        components: {
            ModalWrapper,
        },
        data() {
            return {
                time_range_input: '7 ngày gần đây',
            }
        },
        computed: {
            time_range() {
                return {
                    start: moment().subtract(7, 'd').format(),
                    end: moment().format(),
                }
            }
        }
    });
</script>
