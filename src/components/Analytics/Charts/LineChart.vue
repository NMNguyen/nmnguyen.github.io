<script lang="ts">
    import { Line, mixins } from 'vue-chartjs'
    import Vue from 'vue'
    const { reactiveProp } = mixins;

    export default Vue.extend({
        extends: Line,
        mixins: [reactiveProp],
        props: {
            chartData: {} as any,
            options: {
                type: Object,
                default: null
            }
        },
        mounted(): void {
            const self = (this as any);
            self.renderChart(this.chartData, this.options);
        }
    });
</script>
