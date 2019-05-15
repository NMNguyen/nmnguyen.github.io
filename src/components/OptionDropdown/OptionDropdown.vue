<template>
    <b-dropdown :variant="variant || 'secondary'" class="custom-dropdown">
        <template slot="button-content">
            <i :class="icon"></i>&emsp;
            {{currentText}}
        </template>
        <b-dropdown-item @click="choose(item)" v-for="item in arrOptions" :key="item.value">
            {{item.text}}
        </b-dropdown-item>
    </b-dropdown>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "OptionDropdown",
        props: ["value", "options", "icon", "variant"],
        data() {
            return {
                current: '',
            }
        },
        computed: {
            currentText(): string {
                return this.options[this.current];
            },
            arrOptions(): any[] {
                return Object.keys(this.options).reduce((arr: any[], opt) => {
                    return [...arr, {
                        value: opt,
                        text: this.options[opt],
                    }]
                }, []);
            }
        },
        methods: {
            choose(item: any): void {
                this.current = item.value;
                this.$emit("input", item.value);
            }
        },
        mounted(): void {
            this.current = Object.keys(this.options)[0];
            this.$emit("input", this.current);
        }
    });
</script>
