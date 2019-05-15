<template>
    <div class="about d-flex flex-column" style="height: 100%">
        <header class="p-3 m-0 border flex-shrink-0" style="background:#F9FAFA;">
            <h3>Hộp thoại</h3>
        </header>
        <div class="flex-grow-1 overflow-auto">
            <InboxPage :position_id="null"></InboxPage>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import InboxPage from "@/components/Inbox/InboxPage.vue";

    export default Vue.extend({
        name: "AllInbox",
        components: {
            InboxPage,
        }
    });
</script>

