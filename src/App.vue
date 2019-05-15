<template>
    <div v-if="loading" class="d-flex flex-column justify-content-center align-items-center" style="min-height: 100vh">
        <b-spinner style="width: 64px; height: 64px"></b-spinner>
        <h2>Đang tải</h2>
    </div>
    <div v-else id="app" class="app">
        <Sidebar v-if="hasSidebar"></Sidebar>
        <ModalWrapper class="app-content">
            <router-view class="main"></router-view>
        </ModalWrapper>
        <create-task></create-task>
        <AddCandidateModal></AddCandidateModal>
    </div>
</template>

<style lang="scss">
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        font-family: Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
    }

    .app-content {
        /*margin-top: 20px;*/
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>


<script lang="ts">
    import Vue from "vue";
    import Nav from "@/components/Nav.vue"; // @ is an alias to /src
    import Sidebar from "@/components/Sidebar/Sidebar.vue";
    import CreateTask from "@/components/tasks/CreateTask.vue";
    import ModalWrapper from "@/components/ModalWrapper.vue";
    import AddCandidateModal from '@/components/modals/AddCandidateModal.vue';
    import {messages} from "@/messages";

    Vue.mixin({
        data: function() {
            return {
                messages: messages,
            }
        }
    })

    export default Vue.extend({
        name: "home",
        components: {
            Nav,
            Sidebar,
            CreateTask,
            ModalWrapper,
            AddCandidateModal,
        },
        data() {
            return {
                loading: true,
                showModal: this.$route.meta.showModal,
            }
        },


        computed: {
            hasSidebar(): boolean {
                return this.$route.path !== "/login";
            }
        },
        created() {
            // when the app is created run the set user method
            // this uses Vuex to check if a user is signed in
            // check out mutations in the store.js file
            this.setUser();
            window.onunhandledrejection = (error) => {
                this.$toasted.error(error.reason);
            }
            window.onerror = (error) => {
                this.$toasted.error(error + '');
            }
        },
        methods: {
            async setUser(): Promise<void> {
                await this.$store.dispatch("setUser");
                this.loading = false;
            }
        },
    });
</script>
