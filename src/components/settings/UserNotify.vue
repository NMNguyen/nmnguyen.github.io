<template>
    <div class="content">
        <h1>{{messages.SR_001_NOTIFICATION}}</h1>
        <p>{{messages.SR_001_NOTIFICATION_DESCR}}</p>
        <div class="my-3">

            <div class="notification-headers">
                <small><strong>Email</strong></small>
            </div>
            <h2>{{messages.SR_001_NOTIFICATION_GENERAL}}</h2>
            <div class="subsection-container">
                <ul class="application-options">
                    <li class="option-item">
                        <div class="option-item-info">
                            <label style="margin-bottom: 0px;">{{messages.SR_001_NOTIFICATION_MEETING_REMIND}}</label></div>
                        <div class="option-checkboxes"><label>
                            <input type="checkbox" v-model="meetingRemind" ></label>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="notification-headers">
                <small><strong>Email</strong></small>
            </div>
            <h2>{{messages.SR_001_NOTIFICATION_CANDIDATE}}</h2>
            <div class="subsection-container">
                <ul class="application-options">
                    <li class="option-item">
                        <div class="option-item-info">
                            <label style="margin-bottom: 0px;">{{messages.SR_001_NOTIFICATION_CANDIDATE_ASSIGN}}</label></div>
                        <div class="option-checkboxes"><label>
                            <input type="checkbox" v-model="candidateAssign"> </label>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="notification-headers">
                <small><strong>Email</strong></small>
            </div>
            <h2>{{messages.SR_001_NOTIFICATION_TASKS}}</h2>
            <div class="subsection-container">
                <ul class="application-options">
                    <li class="option-item">
                        <div class="option-item-info">
                            <label style="margin-bottom: 0px;">{{messages.SR_001_NOTIFICATION_TASK_ASSIGN_TO_YOU}}</label></div>
                        <div class="option-checkboxes"><label>
                            <input type="checkbox" v-model="taskAssign"></label>
                        </div>
                    </li>
                    <li class="option-item">
                        <div class="option-item-info">
                            <label style="margin-bottom: 0px;">{{messages.SR_001_NOTIFICATION_TASK_DUAL_DAILY}} </label></div>
                        <div class="option-checkboxes"><label>
                            <input type="checkbox" v-model="taskDuel"></label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="my-2 clearfix">
            <div class="float-right">
                <button class="my-3 btn btn-blue default" @click="SaveUser">
                    <i class="default fa fa-save" v-if="!saveflag">&nbsp;&nbsp;</i>
                    <span class="default" v-if="!saveflag">{{messages.COMMON_SAVE}}</span>
                    <i class="success fa fa-check" v-if="saveflag">&nbsp;&nbsp;</i>
                    <span class="success" v-if="saveflag">{{messages.COMMON_SAVED}}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content {
        padding: 20px;
        background: white;
    }

    .h2 {
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 8px;
    }

    .notification-headers {
        float: right;
        padding-right: 11px;
        margin-top: 5px;
    }

    .notification-headers small {
        display: inline-block;
        margin-left: 10px;
        font-size: 12px;
        text-align: center;
        width: 40px;
    }

    .subsection-container {
        background: #fafafa;
        border: 1px solid #edeff0;
        padding: 0px;
        border-radius: 4px;
        margin-bottom: 15px;
    }

    .application-options {
        background: #fafafa;
        border-radius: 4px;
        margin-bottom: 0px;
        display: block;
        border: none;
        padding: 0 !important;
    }

    .option-item {
        display: flex;
        padding-bottom: 10px;
        border-bottom: 1px solid #dedede;
        padding: 10px;
        margin: 0 !important;
    }

    .option-item-info {
        flex: 1;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        vertical-align: baseline;
    }

</style>

<script lang="ts">
    import Vue from "vue";
    import User from "@/models/User";
    import {fstorage} from '@/firebase';
    import {mapGetters} from 'vuex';


    export default Vue.extend({

        name: "UserNotify",

        data() {
            return {
                meetingRemind: true,
                candidateAssign: true,
                taskAssign: true,
                taskDuel: true,
                saveflag: false,

            }
        },
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentUser',
                'currentCompany',
                // ...
            ]),
        },
        watch: {
            currentUser: function (user) {
                const self = this;
                self.meetingRemind = user.currentUser.meetingRemind;
                self.candidateAssign = user.currentUser.candidateAssign;
                self.taskAssign = user.currentUser.taskAssign;
                self.taskDuel = user.currentUser.taskDuel;
            }
        },
        mounted: function () {

            const self = this;


            if (self.currentUser) {
                self.meetingRemind = self.currentUser.meetingRemind;
                self.candidateAssign = self.currentUser.candidateAssign;
                self.taskAssign = self.currentUser.taskAssign;
                self.taskDuel = self.currentUser.taskDuel;
            }


        },
        methods: {
            SaveUser: function () {
                const self = this;
                if (self.currentUser) {

                    self.currentUser.meetingRemind = self.meetingRemind;
                    self.currentUser.candidateAssign = self.candidateAssign;
                    self.currentUser.taskAssign = self.taskAssign;
                    self.currentUser.taskDuel = self.taskDuel;


                    self.currentUser.update();
                    self.saveflag = true;


                    setTimeout(function () {
                        self.saveflag = false;
                    }, 2000);
                }

            },

        },

    });

</script>
