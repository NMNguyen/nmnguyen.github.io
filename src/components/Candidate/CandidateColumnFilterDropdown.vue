<template>
    <b-dropdown variant="light" class="allow_focus">
        <template slot="button-content">
            <i class="fas fa-columns"></i>&nbsp;
            Cột
        </template>
        <b-dropdown-item
            @click="filter.check = !filter.check"
            :disabled="filter.value === 'name'"
            v-for="(filter, idx) in value" :key="idx">
            <b-form-checkbox v-model="filter.check">
                {{filter.text}}
            </b-form-checkbox>
        </b-dropdown-item>
        <!--<b-form-checkbox-group tabindex="-1" v-model="selected">-->
        <!--</b-form-checkbox-group>-->
    </b-dropdown>
</template>

<script lang="ts">
    import Vue from 'vue';
    import filters from './CandidateColumnFilter';

    export default Vue.extend({
        name: "CandidateColumnFilterDropdown",
        props: ['value'],
    });
</script>
