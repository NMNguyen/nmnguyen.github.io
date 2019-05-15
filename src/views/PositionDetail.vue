<template>
    <div class="d-flex flex-column" style="height: 100%">
        <header class="bzy-page-header no-padding clearfix position-header">
            <div class="flex-left" style="float: left">
                <div class="position-info">
                    <div class="position-state">
                        <b-dropdown>
                            <template slot="button-content">
                                <i class="icon fa fa-circle published"></i>
                            </template>
                            <b-dropdown-item>
                                <i class="fas fa-circle published"></i>
                                Active
                            </b-dropdown-item>
                            <b-dropdown-item>
                                <i class="fas fa-circle draft"></i>
                                Draft
                            </b-dropdown-item>
                            <b-dropdown-item>
                                <i class="fas fa-circle closed"></i>
                                Closed
                            </b-dropdown-item>
                            <b-dropdown-item>
                                <i class="fas fa-archive"></i>
                                Archived
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                    <div class="position-details-old">
                        <h1 class="my-0" title="hoo hoo">hoo hoo</h1>
                        <div class="position-secondary-info">
                            <small class="text-secondary">
                                <i class="fa fa-map-marker-alt"></i>
                                <span>Vietnam</span>
                            </small>
                            <div class="team">
                                <div class="avatar color4">
                                    <img
                                        src="https://breezy-avatars.imgix.net/8b49f/20190325095513.jpg?w=200&amp;h=200&amp;crop=faces&amp;fit=crop"
                                    >
                                </div>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-right" style="float: right; height: 100%;">
                <div class="mainbar clearfix">
                    <div class="tabs-container">
                        <b-nav tab>
                            <b-nav-item :to="nav_link('candidates')">Candidate</b-nav-item>
                            <b-nav-item :to="nav_link('pipeline')">Pipeline</b-nav-item>
                            <b-nav-item :to="nav_link('tasks')">Tasks</b-nav-item>
                            <b-nav-item :to="nav_link('inbox')">Inbox</b-nav-item>
                            <b-nav-item :to="nav_link('activity')">Activity</b-nav-item>
                            <b-nav-item :to="nav_link('calendar')">Calendar</b-nav-item>
                            <b-nav-item title="">
                                <i class="fas fa-star"></i>
                            </b-nav-item>
                            <b-nav-item title="">
                                <i class="fas fa-bell"></i>
                            </b-nav-item>
                            <b-nav-item title="" :to="`/positions/${position_id}/edit/detail`">
                                <i class="fas fa-cog"></i>
                            </b-nav-item>
                        </b-nav>
                    </div>
                </div>
            </div>
        </header>

        <div class="flex-grow-1 overflow-auto">
            <keep-alive>
                <router-view :position_id="position_id"></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "~styles/position_detail";
</style>

<script lang="ts">
    import Vue from 'vue';
    import {messages} from "@/messages";

    export default Vue.extend({
        name: "PositionDetail",
        computed: {
            position_id(): string {
                return this.$route.params.position_id || '';
            },
        },
        methods: {
            nav_link(path): string {
                return `/p/${this.position_id}/${path}`;
            }
        }
    });
</script>


