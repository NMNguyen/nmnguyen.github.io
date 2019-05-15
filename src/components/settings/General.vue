<template>
  <div class="settings">
    <div class="main-content">

        <div class="profile">
            <div class="header">
                <h1>Chung</h1>
            </div><!-- ngIf: updateFailed -->
            <div name="form" novalidate="novalidate">
                <div class="company">
                    <div class="section">
                        <h2>Tên công ty</h2>
                        <p>Giữ nó ngắn gọn và không bao gồm những thứ như "Inc", "LLC", v.v.</p>
                        <input v-model="name"
                            class="name" type="text"
                             placeholder="Tên công ty" required="required">
                    </div>
                </div>
                <div class="footer align-right">
                    <button class="my-3 btn btn-blue default" @click="updateCompany">
                        <i class="default fa fa-save" v-if="!saveflag">&nbsp;&nbsp;</i>
                        <span class="default" v-if="!saveflag">{{messages.COMMON_SAVE}}</span>
                        <i class="success fa fa-check" v-if="saveflag">&nbsp;&nbsp;</i>
                        <span class="success" v-if="saveflag">{{messages.COMMON_SAVED}}</span>
                    </button>
                </div>
            </div>
        </div><!-- end ngIf: activeTab == "general" -->
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {fauth} from '@/firebase';
    import {mapGetters} from 'vuex';
    import ModalWrapper from "@/components/ModalWrapper.vue";


    export default Vue.extend({
        data() {
            return {
                saveflag: false,
                name:'',

            }

        },
        components: {
            ModalWrapper,
        },
        props: {},
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentUser',
                'currentCompany',
                // ...
            ]),
        },
        watch: {
            currentCompany: function (company) {
                const self = this;
                self.name = company.name;
            }
        },
        mounted:function () {
            var self =this;

            if (self.currentCompany) {
                  self.name =  self.currentCompany.name;
            }
        },
        methods: {
            updateCompany(): void {
                var self =this;
                self.currentCompany.name =  self.name;

                self.currentCompany.update().then(function () {
                    self.saveflag = true;

                    setTimeout(function () {
                        self.saveflag = false;
                    }, 2000);
                }).catch(err=>{

                })
            }
        },
    });
</script>
