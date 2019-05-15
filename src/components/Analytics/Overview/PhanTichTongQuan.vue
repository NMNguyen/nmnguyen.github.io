<template>
    <section>
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="m-0">Phân tích Tổng quan</h5>
            <b-button variant="light" download="test-report.pdf" href="/favicon.ico">
                Xuất file&nbsp;<i class="fas fa-cloud-download-alt"></i>
            </b-button>
        </div>
        <div class="border rounded bg-white" v-if="chart.loaded">
            <LineChart :chartData="chart.data" :options="chart.options"></LineChart>
        </div>
        <div class="row my-4">
            <div class="col-md-6 text-center">
                <div class="border rounded bg-white p-4">
                    <h4>
                        <i class="fas fa-eye"></i>&nbsp;Lượt view các vị trí
                    </h4>
                    <h1>10</h1>
                </div>
            </div>
            <div class="col-md-6 text-center">
                <div class="border rounded bg-white p-4">
                    <h4>
                        <i class="fas fa-users"></i>&nbsp;Ứng viên đã đăng ký
                    </h4>
                    <h1>10</h1>
                </div>
            </div>
        </div>

        <div class="row my-4">
            <div class="col-md-4">
                <div class="container border rounded py-3" style="background: #ffffff">
                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <h6><i class="fas fa-upload"></i>&nbsp;&nbsp;Candidates Sourced</h6>
                        </div>
                        <div class="w-100"></div>
                        <div class="col d-flex justify-content-center">
                            <h2>1</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="container border rounded py-3" style="background: #ffffff">
                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <h6><i class="fas fa-briefcase"></i>&nbsp;&nbsp;Candidates Referred</h6>
                        </div>
                        <div class="w-100"></div>
                        <div class="col d-flex justify-content-center">
                            <h2>0</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="container border rounded py-3" style="background: #ffffff">
                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <h6><i class="fas fa-address-card"></i>&nbsp;&nbsp;Candidates Recruited</h6>
                        </div>
                        <div class="w-100"></div>
                        <div class="col d-flex justify-content-center">
                            <h2>0</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row my-4">
            <div class="col-md-4">
                <div class="container border rounded py-3" style="background: #ffffff">
                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <h6><i class="fas fa-calendar-alt"></i>&nbsp;&nbsp;Lịch phỏng vấn</h6>
                        </div>
                        <div class="w-100"></div>
                        <div class="col d-flex justify-content-center">
                            <h2>1</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="container border rounded py-3" style="background: #ffffff">
                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <h6><i class="fas fa-trash"></i>&nbsp;&nbsp;Ứng viên bị loại</h6>
                        </div>
                        <div class="w-100"></div>
                        <div class="col d-flex justify-content-center">
                            <h2>0</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="container border rounded py-3" style="background: #ffffff">
                    <div class="row">
                        <div class="col d-flex justify-content-center">
                            <h6><i class="fas fa-trophy"></i>&nbsp;&nbsp;Ứng viên được nhận</h6>
                        </div>
                        <div class="w-100"></div>
                        <div class="col d-flex justify-content-center">
                            <h2>0</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script lang="ts">
    import Vue from 'vue';
    import LineChart from "@/components/Analytics/Charts/LineChart.vue";
    import Momment from 'moment';

    const lineStyle = (color: string):any =>({
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: color,
        pointBackgroundColor: color,
        pointBorderColor: "white",
    });

    export default Vue.extend({
        name: "PhanTichTongQuan",
        components: {
            LineChart,
        },

        props: {
            range: {
                type: Object,
                default: {
                    start: Momment().subtract(7, 'd').format(),
                    end: Momment().format(),
                },
            },
        },

        data() {
            return {
                chart: {
                    loaded: false,
                    data: {
                        datasets: [] as any[],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [
                                {
                                    type: 'time',
                                    time: {
                                        unit: 'day',
                                        dateFormat: {

                                        }
                                    }
                                }
                            ],
                        },
                        legend: {
                            display: true,
                            labels: {
                                usePointStyle: true,
                            }
                        }
                    }
                }
            }
        },

        methods: {
            fillTestData(): void
            {
                // this.chart.data.labels = ((n: number)=>{
                //     const res = [] as any[];
                //     while (n > 0) res.unshift(`Thang ${n--}`);
                //     return res;
                // })(12);

                const random = (): any[] =>{
                    const res = [] as any[];
                    const current: Momment.Moment = Momment(this.range.start);
                    while (current.isBefore(this.range.end)) {
                        res.push({
                            x: new Date(current.format()),
                            y: Math.round(Math.random() * 10 * Math.random()),
                            // y: replace real data at this day
                        });
                        current.add(1, 'd');
                    }
                    return res;
                };
                this.chart.data.datasets.push({
                    ...lineStyle("red"),
                    label: "Ứng tuyển",
                    data: random(),
                });
                this.chart.data.datasets.push({
                    ...lineStyle("blue"),
                    label: "Lượt xem",
                    data: random(),
                });
                this.chart.data.datasets.push({
                    ...lineStyle("orange"),
                    label: "Nguồn",
                    data: random(),
                });
                this.chart.data.datasets.push({
                    ...lineStyle("cyan"),
                    label: "Được giới thiệu",
                    data: random(),
                });
                this.chart.data.datasets.push({
                    ...lineStyle("yellow"),
                    label: "Đã tuyển",
                    data: random(),
                });

                this.chart.loaded = true;
            }
        },

        mounted(): void {
            // for test UI
            this.fillTestData();
        }
    })
</script>
