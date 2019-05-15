<template>
    <div id="user-settings">
        <header class="bg-dark text-light py-4 px-3">
            <h4> {{messages.SR_001_USER_SETTING_TITLE}}</h4>
        </header>
        <div class="d-flex">
            <div class="flex-shrink-0 default-bg-color">
                <b-nav vertical class="text-light">
                    <b-nav-item class="breezy-nav-item" activeClass="activeTab"
                        :to="{name: 'UserSettingProfile'}">
                        <i class="fas fa-user"></i>&nbsp;
                        {{messages.SR_001_PROFILE_TITLE}}
                    </b-nav-item>
                    <b-nav-item class="breezy-nav-item" activeClass="activeTab"
                        :to="{name: 'UserSettingPassword'}">
                        <i class="fas fa-key"></i>&nbsp;
                        {{messages.SR_001_PASSWORD_TITLE}}
                    </b-nav-item>
                    <b-nav-item class="breezy-nav-item" activeClass="activeTab"
                                :to="{name: 'UserSettingNotification'}">
                        <i class="fas fa-bell"></i>&nbsp;
                        {{messages.SR_001_NOTIFICATION_TITLE}}
                    </b-nav-item>
                    <b-nav-item class="breezy-nav-item" activeClass="activeTab"
                                :to="{name: 'UserSettingSignature'}">
                        <i class="fas fa-pen"></i>&nbsp;
                        {{messages.SR_001_SIGNATURE_TITLE}}
                    </b-nav-item>
                </b-nav>
            </div>
            <div class="flex-grow-1 overflow-auto">
                <keep-alive>
                <router-view name="modal_child"></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {fauth} from '@/firebase';
    import {mapGetters} from 'vuex';

    export default Vue.extend({

        props: {},
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentUser',
                'currentCompany',
                // ...
            ]),
        },
        created() {
            console.info("candidateModal.vue")
        },
        methods: {},
    });
</script>
