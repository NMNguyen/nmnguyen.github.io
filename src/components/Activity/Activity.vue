<template>
    <section class="d-flex p-3" style="height: 100%">
        <aside class="flex-shrink-0 p-2" style="width: 250px">
            <h3>Filter Options</h3>
            <ul class="actions">
                <li class="action">
                    <FilterDropdown icon="fas fa-bolt" title="Activity Type"
                                    v-model="activityFilter"></FilterDropdown>
                </li>
                <li class="action">
                    <FilterDropdown icon="fas fa-user-alt" title="Team Members"
                                    v-model="membersFilter"></FilterDropdown>
                </li>
            </ul>
        </aside>
        <div class="flex-grow-1 overflow-auto bg-light border m-2 p-4">
            <ActivityStream></ActivityStream>
        </div>
    </section>
</template>

<style lang="scss">
    .actions {
        .action {
            margin: 1em 0;
        }
    }
</style>

<script lang="ts">
    import Vue from 'vue';
    import ActivityStream from "@/components/Activity/ActivityStream.vue";
    import FilterDropdown from "@/components/FilterColumn/FilterDropdown.vue";
    import ActivityTypeFilter from './ActivityTypes';

    export default Vue.extend({
        name: "Activity",
        components: {
            ActivityStream,
            FilterDropdown,
        },
        data() {
            return {
                activityFilter: [
                    ...ActivityTypeFilter,
                ],
                membersFilter: [
                    {
                        name: 'Hong Le Viet',
                        value: true,
                    },
                    {
                        name: 'Nguyen Minh Nguyen',
                        value: true,
                    },
                ],
            }
        },
    })
</script>
