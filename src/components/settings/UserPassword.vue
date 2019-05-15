<template>
    <div class="content">
        <h1>{{messages.SR_001_PASSWORD}}</h1>
        <p>{{messages.SR_001_PASSWORD_DESCR}}</p>
        <div>
            <div class="my-3">
                <input type="password" name="old_password" autocomplete="off" :placeholder="messages.SR_001_PASSWORD"
                       v-model="old_password">
            </div>
            <div class="my-3">
                <input type="password" name="new_password" autocomplete="off" :placeholder="messages.SR_001_NEW_PASSWORD"
                       v-model="password">
            </div>
            <div class="my-3">
                <input type="password" name="confirm_password" autocomplete="off" :placeholder="messages.SR_001_CONFIRM_PASSWORD"
                       v-model="confirm_password">

            </div>
            <div class="my-3" v-if="error">
                   <span style="color: red; padding-left: 10px;"
                         v-if="error"> {{errorMessage}}</span>
            </div>
            <div class="d-flex justify-content-end">
                <button class="my-3 btn btn-blue default" @click="SavePassword">
                    <i class="default fa fa-save" v-if="!saveflag">&nbsp;&nbsp;</i>
                    <span class="default" v-if="!saveflag">{{messages.COMMON_SAVE}}</span>
                    <i class="success fa fa-check" v-if="saveflag">&nbsp;&nbsp;</i>
                    <span class="success" v-if="saveflag">{{messages.COMMON_SAVED}}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .content {
        padding: 20px;
    }

</style>

<script lang="ts">
    import Vue from "vue";
    import User from "@/models/User";
    import {fauth} from '@/firebase';
    import firebase from '@/firebase';
    import {mapGetters} from 'vuex';


    export default Vue.extend({

        name: "UserPassword",
        data() {
            return {
                old_password: '',
                password: '',
                confirm_password: '',
                saveflag: false,
                error: false,
                email: '',
                errorMessage: '',

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
                self.email = self.currentUser.email;
            }
        },
        mounted: function () {

            const self = this;


            if (self.currentUser) {
                self.email = self.currentUser.email;
            }


        },
        methods: {
            validate: function () {
                const self = this;
                let flag = true;
                self.errorMessage = "";


                if (self.password == "") {
                    flag = false;
                    self.errorMessage = self.messages.SR_001_PASS_NULL;
                } else if (self.password.length < 6) {
                    flag = false;
                    self.errorMessage = self.messages.SR_001_PASS_MIN;
                } else if (self.password != self.confirm_password) {
                    flag = false;
                    self.errorMessage = self.messages.SR_001_PASS_MISMATCHED;

                }


                return flag;
            },
            SavePassword: function () {
                const self = this;

                var user = fauth.currentUser;

                self.password = self.password.trim();
                self.confirm_password = self.confirm_password.trim();

                //xac thuc credentials
                var credential = firebase.auth.EmailAuthProvider.credential(
                    user.email,
                    self.old_password
                );

                console.log(credential);

                self.error = false;

                if (user) {

                    if (user.email) {

                        self.error = false;
                        console.log(self.email);

                        // lay xac thuc xong moi update lai password

                        user.reauthenticateAndRetrieveDataWithCredential(credential).then(function () {

                            if (self.validate()) {
                                user.updatePassword(self.password).then(function () {
                                    self.saveflag = true;

                                    self.old_password = "";
                                    self.password = "";
                                    self.confirm_password = "";

                                    self.$toasted.show(self.messages.COMMON_SAVED);

                                    setTimeout(function () {
                                        self.saveflag = false;
                                    }, 1000);
                                }).catch(function (error) {
                                    console.log(error);
                                    self.error = true;
                                    if (error.code == "auth/weak-password")
                                        self.errorMessage = self.messages.SR_001_PASS_MIN;
                                    else
                                        self.errorMessage = self.messages.SR_001_PASS_SAVE_FAIL;
                                });
                            } else {
                                self.error = true;
                            }
                        }).catch(function (error) {
                            console.log(error);
                            if (error.code == "auth/wrong-password")
                                self.errorMessage = self.messages.SR_001_WRONG_PASS;
                            else
                                self.errorMessage = error;
                            self.error = true;
                        });
                    } else {
                        self.errorMessage = "User không tồn tại";
                        self.error = true;
                    }
                } else {
                    self.errorMessage = "User không tồn tại";
                    self.error = true;
                }


            }
        }

    });
</script>
