<template>
    <div class="about d-flex flex-column" style="height: 100%">
        <header class="p-3 border flex-shrink-0" style="background:#F9FAFA;">
            <h3>Ứng viên</h3>
        </header>
        <CandidatePage></CandidatePage>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import CandidatePage from "@/components/Candidate/CandidatePage.vue";

    export default Vue.extend({
        name: "AllCandidatePage",
        components: {
            CandidatePage,
        }
    });
</script>

