<template>
    <b-dropdown class="btn-group custom-dropdown" variant="gray">
        <template slot="button-content">
            <i :class="icon"></i>&nbsp;
            {{title}}
        </template>
        <b-dropdown-text class="check-item" v-for="(option, idx) in options" :key="idx">
            <b-form-checkbox v-model="option.value">{{option.name}}</b-form-checkbox>
        </b-dropdown-text>
    </b-dropdown>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class FilterDropdown extends Vue {
        @Prop({default: 'fas fa-circle'}) icon: string;
        @Prop({default: 'Options'}) title: string;
        @Prop({default: []}) value: any[];

        get options(): any[] {
            return this.value;
        }
        set options(arr: any[]) {
            this.$emit("input", arr);
        }
    }

    // export default Vue.extend({
    //     name: "FilterDropdown",
    //     props: {
    //         icon: {
    //             type: String,
    //             defaultValue: 'fas fa-circle',
    //         },
    //         title: {
    //             type: String,
    //             defaultValue: 'Options',
    //         },
    //         value: {
    //             warn: Array,
    //             type: Array,
    //             defaultValue: [],
    //         }
    //     },
    //     computed: {
    //         options: {
    //             get(): any[] {
    //                 return this.value;
    //             },
    //             set(val: any[]): void {
    //                 this.$emit('input', val);
    //             }
    //         }
    //     },
    //     methods: {
    //
    //     }
    // });
</script>
