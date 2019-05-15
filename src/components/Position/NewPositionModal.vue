<template>
    <div id="new-position-modal">
        <div class="bg-dark text-light px-4 py-3">
            <h3>{{title}}</h3>
        </div>
        <div class="d-flex">
            <div class="flex-shrink-0 bg-light">
                <b-nav class="position-activity" vertical>
                    <b-nav-item class="breezy-nav-item" :to="firstNavLink">
                        <i class="fas fa-briefcase"></i>&nbsp;
                        Chi tiết
                    </b-nav-item>
                    <b-nav-item class="breezy-nav-item"
                                :disabled="isCreateNew"
                                :to="nav_link('Application')">
                        <i class="fas fa-list-ol"></i>&nbsp;
                        Application
                    </b-nav-item>
                    <b-nav-item class="breezy-nav-item"
                                :disabled="isCreateNew"
                                :to="nav_link('Pipeline')">
                        <i class="fas fa-list-ol"></i>&nbsp;
                        Quy trình
                    </b-nav-item>
                    <b-nav-item class="breezy-nav-item"
                                :disabled="isCreateNew"
                                :to="nav_link('Scorecard')">
                        <i class="fas fa-thumbs-up"></i>&nbsp;
                        Thẻ điểm
                    </b-nav-item>
                    <b-nav-item class="breezy-nav-item"
                                :disabled="isCreateNew"
                                :to="nav_link('Promote')">
                        <i class="fas fa-bullhorn"></i>&nbsp;
                        Promote
                    </b-nav-item>
                    <b-nav-item class="breezy-nav-item"
                                :disabled="isCreateNew"
                                :to="nav_link('Team')">
                        <i class="fas fa-users"></i>&nbsp;
                        Đội tuyển dụng
                    </b-nav-item>
                </b-nav>
            </div>
            <div class="flex-grow-1 overflow-auto">
                <router-view name="modal_child"></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .position-activity {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 1.25em;
            left: 2.75em;
            width: 4px;
            height: calc(100% - 2.5em);
            background-color: #ccc;
        }
    }
</style>

<script lang="ts">
    import Vue from 'vue';
    import {Route} from "vue-router";
    import {Location} from "vue-router/types/router";

    export default Vue.extend({
        name: "PositionDetail",
        data() {
            return {
                position: { // test
                    name: 'New Position',
                }
            }
        },
        computed: {
            position_id(): string {
                return this.$route.params['position_id'];
            },
            title(): string {
                return this.$route.name === "New Position" ? "Vị trí mới" : this.position.name;
            },
            isCreateNew(): boolean {
                return this.$route.name === "NewPosition";
            },
            firstNavLink(): Location {
                if (this.$route.name === "NewPosition") {
                    return {
                        name: "NewPosition",
                    }
                } else {
                    return {
                        name: "PositionDetailTab",
                        params: {
                            position_id: this.position_id,
                        }
                    }
                }
            }
        },
        methods: {
            nav_link(name: string): Location {
                return {
                    name: `Position${name}Tab`,
                    params: {
                        position_id: this.position_id,
                    },
                };
            },
        }
    });
</script>
