<template>
    <div class="settings portal">
        <div class="main-content">
            <div class="profile nigvlxscope" nigvlxif="activeTab == &quot;type&quot;">
                <div class="header">
                    <h1>Cấu hình</h1>
                    <p>Trang tuyển dụng của bạn thường sẽ là nơi tiếp cận đầu tiên giữa thương hiệu của bạn và ứng viên.</p>
                    <p>Tùy chỉnh để ứng viên ấn tượng và có thiện cảm ngay từ cái nhìn đầu tiên.</p>
                </div>
                <div name="layoutForm" novalidate="novalidate">
                    <div class="company">
                        <div class="section">
                            <h2>Chọn giao diện</h2>
<!--                            <p>Chọn kiểu giao diện mà bạn thích bên dưới:</p>-->
                            <div class="portal-layout">
                                <ul class="layouts">
                                    <li class="layout">
                                        <input type="radio"
                                               v-model="currentCompany.config"
                                               value="bold">
                                        <h3> Chuẩn <span class="small">(khuyên dùng)</span></h3>
                                        <div class="browser bold">
                                            <div class="controls">
                                                <div class="control1"></div>
                                                <div class="control2"></div>
                                                <div class="control3"></div>
                                            </div>
                                            <div class="address-bar"></div>
                                            <div class="content">
                                                <div class="hero" style="background: rgb(117, 111, 125)">
                                                    <div class="hero-header">
                                                        <div class="logo"></div>
                                                        <ul class="actions">
                                                            <li class="action"></li>
                                                            <li class="action"></li>
                                                            <li class="action"></li>
                                                        </ul>
                                                    </div>
                                                    <div class="title"></div>
                                                    <div class="sub-title"></div>
                                                    <div class="cta"
                                                         style="background-color: rgba(0,0,0,0.2)"></div>
                                                </div>
                                                <div class="video-container">
                                                    <div class="video"></div>
                                                    <div class="copy">
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="layout">
                                        <input v-model="currentCompany.config"
                                               type="radio"
                                               value="simple">
                                        <h3> Đơn giản </h3>
                                        <div class="browser simple">
                                            <div class="controls">
                                                <div class="control1"></div>
                                                <div class="control2"></div>
                                                <div class="control3"></div>
                                            </div>
                                            <div class="address-bar"></div>
                                            <div class="content">
                                                <div class="header">
                                                    <div class="logo"></div>
                                                    <ul class="actions">
                                                        <li class="action"></li>
                                                        <li class="action"></li>
                                                        <li class="action"></li>
                                                    </ul>
                                                </div>
                                                <div class="content-body">
                                                    <div class="title"></div>
                                                    <ul class="meta">
                                                        <li class="meta-item"></li>
                                                        <li class="meta-item"></li>
                                                        <li class="meta-item"></li>
                                                    </ul>
                                                    <div class="body">
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="line"></div>
                                                        <div class="video-container">
                                                            <div class="video"></div>
                                                        </div>
                                                        <div class="line"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer align-right">
                        <button @click="updateCompany()" class="btn btn-blue default"
                                type="submit"><i class="default fa fa-save"></i><span
                            class="default">Lưu</span></button>
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
