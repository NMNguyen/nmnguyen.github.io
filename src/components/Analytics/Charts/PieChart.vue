<script lang="ts">
    import Vue from 'vue';
    import {Pie, mixins} from 'vue-chartjs';

    export default Vue.extend({
        extends: Pie,
        mixins: [mixins.reactiveProp],
        props: ['options'],
        mounted(): void {
            const self = (this as any);
            self.renderChart(self.chartData, self.options);
        }
    })
</script>
