<template>
    <div class="about d-flex flex-column" style="height: 100vh">
        <header class="p-4 m-0 border default-bg-color flex-shrink-0">
            <h3>Công việc</h3>
        </header>
        <section class="flex-grow-1 overflow-auto">
            <TaskPage></TaskPage>
        </section>
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import TaskPage from "@/components/tasks/TaskPage.vue";

    export default Vue.extend({
        name: "AllTasks",
        components: {
            TaskPage,
        }
    });
</script>
