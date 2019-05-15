<template>
    <div data-id="modal-wrapper" :class="this_class" :style="this_style">
        <slot></slot>
        <modal :scrollable="true" name="modal" :width="900" :max-height="600"
               :clickToClose="false" :pivotY="0.25" :adaptive="true"
               @closed="closeModal(false)">
            <router-view name="modal_content"></router-view>
            <b-button class="close-button" @click="closeModal(true)">
                <i class="fas fa-times"></i>
            </b-button>
        </modal>
    </div>
</template>

<style lang="scss">
    .close-button {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        z-index: 999;
    }
    .v--modal-overlay .v--modal-box {
        overflow: visible !important;
        height:auto!important;
    }
</style>

<script lang="ts">
    import Vue from 'vue';
    import {Route, RouteRecord} from "vue-router";
    export default Vue.extend({
        name: 'ModalWrapper',
        // props: ['class', 'style'],
        data() {
            return {
                showModal: false,
            }
        },
        computed: {
            this_class(): any
            {
                return this.$attrs.class;
            },
            this_style(): any
            {
                return this.$attrs.style;
            },
        },
        watch: {
            '$route'(route: Route) {
                if (route.meta.showModal)
                    this.$modal.show('modal');
            }
        },
        methods: {
            closeModal(isShow: boolean): void {
                if (isShow) this.$modal.hide("modal");
                // const returnPath = this.$route.matched[0].meta.returnPath || "/";
                // this.$router.replace(returnPath);
                this.$router.replace(localStorage.getItem("last-modal-wrapper") || "/");
            }
        },
        mounted() {
            // console.log(this.$route.matched);
            if (this.$route.matched.some((route: RouteRecord)=>route.meta.showModal)) {
                this.$modal.show("modal");
            } else {
                localStorage.setItem("last-modal-wrapper", this.$route.fullPath);
            }
        },
        updated(): void {
            // console.log(this.$route.matched);
            if (this.$route.matched.some((route: RouteRecord)=>route.meta.showModal)) {
                this.$modal.show("modal");
            } else {
                localStorage.setItem("last-modal-wrapper", this.$route.fullPath);
            }
        }
    })
</script>
