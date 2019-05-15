<template>
    <div class="settings portal">
        <div class="main-content">
            <div class="profile nigvlxscope">
                <div class="header">
                    <h1>Tùy chỉnh CSS</h1>
                    <p>Cần một chút cá nhân hóa trên cổng thông tin nghề nghiệp của bạn? Hoặc có thể theo dõi phân tích của bên thứ 3? Không vấn đề gì. Thêm CSS và Javascript tùy chỉnh của riêng bạn bên dưới.</p>
                </div>
                <div name="customCssForm"
                     novalidate="novalidate"
                     class="nigvlxpristine nigvlxvalid">
                    <div class="company">
                        <div class="section">
                            <p>Thêm CSS ở đây, nó sẽ được hiện ở thẻ &lt;head&gt;.</p>
                            <div>
                                <textarea v-model="currentCompany.css" cols="30" rows="10" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="footer align-right">
                        <button @click="updateCompany()"
                                class="btn btn-blue default"
                                type="submit">
                            <i class="default fa fa-save"></i>
                            <span class="default">Lưu</span>
                        </button>
                    </div>
                    <photoshop-picker v-model="colors"/>
                </div>
            </div><!-- end ngIf: activeTab == "custom-css-js" -->
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
