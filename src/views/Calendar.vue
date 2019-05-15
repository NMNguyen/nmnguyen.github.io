
<template>
    <div class="d-flex all-calendar flex-column" style="height: 100%">
        <header class="p-3 m-0 border default-bg-color flex-shrink-0">
            <h3>Lịch</h3>
        </header>
        <div class="d-flex flex-grow-1 overflow-auto">
            <CalendarPage></CalendarPage>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import CalendarPage from "@/components/Calendar/CalendarPage.vue";

    export default Vue.extend({
        name: "AllCalendar",
        components: {
            CalendarPage,
        },
    });
</script>
