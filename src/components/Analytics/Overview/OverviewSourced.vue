<template>
    <div class="container mx-0 px-0 pb-3 my-3 border rounded" style="background: #F9FAFA">

        <!-- Chart 01 -->
        <!-- Header -->
        <div class="container mt-3 d-flex justify-content-between align-items-center">
            <h6>Xem nguồn</h6>
            <button class="btn py-1 px-1" style="background: #edeff0">
                <i class="fas fa-cloud-download-alt text-secondary"></i>
                <small class="text-secondary">Xuất file</small>
            </button>
        </div>
        <!-- Chart content -->
        <div class="container border rounded py-3 my-2 d-flex justify-content-between"
             style="width: 95%; background: #ffffff">
            <div style="width: 300px">
                <PieChart :chartData="chart.data" :options="chart.options"></PieChart>
            </div>
            <div class="container d-flex justify-content-end">
                <table>
                    <tbody>
                    <tr>
                        <td class="px-3"><span>Career Portal</span></td>
                        <td class="px-3"><span>10</span></td>
                        <td class="px-3" style="width: 200px">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 100%; background: #ff6384"
                                     aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </td>
                        <td>100%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Chart 02 -->
        <!-- Header -->
        <div class="container mt-3 d-flex justify-content-between align-items-center">
            <h6>Nộp nguồn</h6>
            <button class="btn py-1 px-1" style="background: #edeff0">
                <i class="fas fa-cloud-download-alt text-secondary"></i>
                <small class="text-secondary">Xuất file</small>
            </button>
        </div>
        <!-- Chart content -->
        <div class="container border rounded py-3 my-2 d-flex justify-content-between"
             style="width: 95%; background: #ffffff">
            <div style="width: 300px">
                <PieChart :chartData="chart.data" :options="chart.options"></PieChart>
            </div>
            <div class="container d-flex justify-content-end">
                <table>
                    <tbody>
                    <tr>
                        <td class="px-3"><span>Career Portal</span></td>
                        <td class="px-3"><span>1</span></td>
                        <td class="px-3" style="width: 200px">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 100%; background: #ff6384"
                                     aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </td>
                        <td>100%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import PieChart from '../Charts/PieChart.vue';

    export default Vue.extend({
        name: "OverviewSourced",
        components: {
            PieChart,
        },
        data() {
            return {
                chart: {
                    loaded: true,
                    data: {
                        labels: ["Portal", "ITViec", "Facebook"],
                        datasets: [{
                            data: [10, 2, 0],
                            backgroundColor: ['#333', 'red', 'blue'],
                        }],
                    },
                    options: {
                        responsive: true,
                        legend: {
                            display: false,
                        }
                    }
                }
            }
        }
    });
</script>
