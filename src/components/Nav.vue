<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/inbox">Inbox</router-link> |
        <router-link to="/tasks">Tasks</router-link> |
        <router-link to="/calendar">Calendar</router-link> |
        <router-link to="/analytics">Report</router-link> |
        <router-link to="/positions">Positions</router-link> |
        <router-link to="/candidates">Candidates</router-link> |
        <router-link to="/pipeline">Pipelines</router-link> |
        <router-link to="/profile">Profile</router-link> |
        <router-link to="/company">Company</router-link> |
        <router-link to="/portal">Portal</router-link> |
        <a @click="signOut()">Sign out</a>

    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {fauth} from '@/firebase';

    export default Vue.extend({
        name: "Nav",
        props: {
            msg: String
        },
        methods: {
            signOut() {
                fauth.signOut().then(_ => {
                    this.$router.push('/login');
                })
            }
        },
    });
</script>
