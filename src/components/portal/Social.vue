<template>
    <div class="settings">
        <div class="main-content">
            <div class="integrations profile nigvlxscope">
                <div class="header">
                    <h1>Website / Social</h1>
                    <p>Thêm đường dẫn tới website, blog, hồ sơ mạng xã hội.</p>
                </div><!-- ngIf: updateFailed -->
                <div name="form" novalidate="novalidate" nigvlxsubmit="updatePortalSocial(portal.social)"
                      nigvlxclass="{true: 'error'}[submitted &amp;&amp; form.$invalid]" class="nigvlxpristine nigvlxvalid">
                    <div class="company">
                        <div class="section half-block">
                            <h3>Website</h3>
                            <input v-model="currentCompany.website" class="form-control" type="text" placeholder="e.g. http://app.cloudjet.work/">
                            <h3>Twitter</h3>
                            <input v-model="currentCompany.twitter" class="form-control" type="text" placeholder="e.g. http://twitter.com/app.cloudjet.work">
                            <h3>Facebook</h3>
                            <input v-model="currentCompany.facebook" class="form-control" type="text" placeholder="e.g. http://facebook.com/app.cloudjet.work">
                            <h3>LinkedIn</h3>
                            <input v-model="currentCompany.linkedin" class="form-control" type="text" placeholder="e.g. http://linkedin.com/in/app.cloudjet.work">
                            <h3>Instagram</h3>
                            <input v-model="currentCompany.instagram" class="form-control" type="text" placeholder="e.g. http://instagram.com/app.cloudjet.work">
                            <h3>Blog</h3>
                            <input v-model="currentCompany.blog" class="form-control" type="text" placeholder="e.g. http://app.cloudjet.work/blog">
                        </div>
                        <div class="section half-block">
                            <h3>Mã số thuế</h3>
                            <input class="form-control" type="number" placeholder="e.g. 1199763">
                        </div>
                    </div>
                    <div class="footer align-right">
                        <button @click="updateCompany()" class="btn btn-blue default" type="submit">
                            <i class="default fa fa-save"></i>
                            <span class="default">Lưu</span>
                        </button>
                    </div>
                </div>
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
        methods: {
            updateCompany: function () {
                this.currentCompany.update();
                this.$toasted.show('Saved!')
            }
        },
    });
</script>
