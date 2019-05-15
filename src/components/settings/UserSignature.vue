<template>
    <div class="p-3 user_sign" style="background: white;">
        <h1>{{messages.SR_001_SIGNATURE}}</h1>
        <p>{{messages.SR_001_SIGNATURE_DESCR}}</p>
        <wysiwyg v-model="signatureHtml"></wysiwyg>
        <b-button-group class="my-2">
            <b-button @click="EnableSignature" class="btn-xs" :class="[signatureFlag ? 'btn-success': 'btn-default']">{{messages.COMMON_ENABLE}}</b-button>
            <b-button @click="DisableSignature" class="btn-xs " :class="[signatureFlag ? 'btn-default' : 'btn-success']">{{messages.COMMON_DISABLE}}</b-button>
        </b-button-group>
        <div class="my-2 clearfix">
            <div class="float-right">
                <button class="my-3 btn btn-blue default" @click="SaveUserSignature">
                    <i class="default fa fa-save" v-if="!saveflag">&nbsp;&nbsp;</i>
                    <span class="default" v-if="!saveflag">{{messages.COMMON_SAVE}}</span>
                    <i class="success fa fa-check" v-if="saveflag">&nbsp;&nbsp;</i>
                    <span class="success" v-if="saveflag">{{messages.COMMON_SAVED}}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    @import "~vue-wysiwyg/dist/vueWysiwyg.css";

    .btn-success {
        background-color: #76d691 !important;
        border-color: #76d691 !important;
        color: #fff !important;
    }
    .btn-secondary:focus , .btn-success:focus{
        -webkit-box-shadow:none;
         box-shadow:none;
    }
    .btn {
        box-shadow: none;
    }
    .btn:hover {
        background-color: inherit;
    }
</style>

<script lang="ts">
    import Vue from 'vue';
    import wysiwyg from "vue-wysiwyg";
    import User from "@/models/User";
    //import {fauth} from '@/firebase';
    import {mapGetters} from 'vuex';


    Vue.use(wysiwyg, {
        hideModules: { "image": true },
    });

    export default Vue.extend({
        name: "UserSignature",
        data() {
            return {
                signatureHtml: '',
                saveflag: false,
                signatureFlag: true,
                
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

                if (!user.currentUser.signatureFlag) {
                    self.signatureFlag = false;
                }

                if (user.currentUser.signatureHtml)
                    self.signatureHtml = user.currentUser.signatureHtml;
            }
        },
        mounted: function () {

            const self = this;


            if (self.currentUser) {

                if (!self.currentUser.signatureFlag) {
                    self.signatureFlag = false;
                }

                if (self.currentUser.signatureHtml)
                    self.signatureHtml = self.currentUser.signatureHtml;


            }
        },
            methods: {
                EnableSignature: function () {
                    const self = this;
                    self.signatureFlag = true;

                },
                DisableSignature: function () {
                    const self = this;
                    self.signatureFlag = false;
                },
                SaveUserSignature: function () {
                    const self = this;
                    if (self.currentUser) {
                        self.currentUser.signatureFlag = self.signatureFlag;
                        self.currentUser.signatureHtml = self.signatureHtml;
                        self.currentUser.update();
                        self.saveflag = true;
                        setTimeout(function () {
                            self.saveflag = false;
                        }, 2000);
                    }
                }
            }
        })
</script>
