<template>
    <b-dropdown variant="light">
        <template slot="button-content">
            <i class="fas fa-user"></i>&nbsp;
            {{ types[current].text }}
        </template>
        <b-dropdown-item v-for="(type, idx) in types" :key="idx"
            @click="choose(idx)">
            {{type.text}}
        </b-dropdown-item>
    </b-dropdown>
</template>

<script lang="ts">
    import Vue from 'vue';
    import types from './CandidateType';

    export default Vue.extend({
        name: "CandidateTypeDropdown",
        props: ["value"],
        data() {
            return {
                types,
                current: 0,
            }
        },
        methods: {
            choose(idx: number): void
            {
                this.current = idx;
                this.$emit("input", this.types[idx].value);
            }
        },
        created(): void {
            this.choose(0);
        }
    });
</script>
