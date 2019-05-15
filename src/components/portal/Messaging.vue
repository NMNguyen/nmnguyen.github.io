<template>
    <div class="settings">
        <div class="main-content">
            <div class="profile nigvlxscope">
                <div class="header">
                    <h1>Thông báo</h1>
                </div>
                <div name="messagingForm" novalidate="novalidate">
                    <div class="company">
                        <div class="section">
                            <h2>Tiêu đề chính</h2>
                            <p>Ngắn nhưng ấn tượng.</p>
                            <input v-model="currentCompany.messaging_header"
                                   class="form-control"
                                   type="text"
                                   placeholder="e.g. Come work with us."
                                   maxlength="48"
                                   required>
                        </div>
                        <div class="section">
                            <h2>Tiêu đề phụ (tùy chọn)</h2>
                            <p>Bổ sung thêm cho tiêu đề chính.</p>
                            <input v-model="currentCompany.messaging_subheader"
                                   class="form-control"
                                   type="text"
                                   placeholder="e.g. We're building better recruiting software. Join us."
                                   maxlength="100">
                        </div>
                        <div class="section">
                            <h2>Chi tiết</h2>
                            <p>
                                Nói thêm một chút về doanh nghiệp của bạn. Khoảng 1-2 đoạn ngắn.</p>
                            <div class="redactor-box redactor-styles-on redactor-toolbar-on redactor-blur">
                                <textarea v-model="currentCompany.messaging_introduction"
                                          class="form-control">
                                </textarea>
                            </div>
                        </div>

                    </div>
                    <div class="footer align-right">
                        <button @click="updateCompany()" class="btn btn-blue default" type="submit"><i class="default fa fa-save"></i><span
                            class="default">Lưu</span></button>
                    </div>
                </div>
            </div>
        </div>

        <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
            <div class="toast" style="position: absolute; top: 0; right: 0;">
                <div class="toast-header">
                    <img class="rounded mr-2" alt="...">
                    <strong class="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
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
