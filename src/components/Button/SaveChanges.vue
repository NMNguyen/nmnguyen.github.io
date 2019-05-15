<template>
    <b-button variant="info">
        <i class="fas fa-save"></i>&nbsp;
        <span v-if="loading">
            <b-spinner variant="white"></b-spinner>
        </span>
        <span v-else>{{messages.COMMON_SAVE}}</span>
    </b-button>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                loading: false,
            }
        },
        watch: {
            "$attrs.load"(val) {
                this.loading = val;
            }
        }
    })
</script>
