<template>
    <div id="recruiting-settings">
        <div class="bg-dark px-4 py-3 rounded text-light">
            <h2>Recruiting Preferences</h2>
        </div>
        <div class="d-flex">
            <div class="flex-shrink-0 overflow-auto bg-light">
                <ul class="list-unstyled">
                    <li class="breezy-nav-item" role="tab">
                        <router-link :to="{path: '/company/pipeline'}">
                            <i class="fas fa-columns"></i><span>Quy trình tuyển dụng</span>
                        </router-link>
                    </li>
                    <li class="breezy-nav-item">
                        <router-link :to="{path: '/company/interviewguides'}">
                            <i class="fas fa-book"></i><span>Hướng dẫn phỏng vấn</span>
                        </router-link>
                    </li>
                    <li class="breezy-nav-item">
                        <router-link :to="{ path: '/company/questionnaires' }">
                            <i class="fas fa-list"></i><span>Bảng câu hỏi</span>
                        </router-link>
                    </li>
                    <li class="breezy-nav-item">
                        <router-link :to="{path: '/company/messages-template'}">
                            <i class="fas fa-envelope"></i><span>Messages Template</span>
                        </router-link>
                    </li>
                    <li class="breezy-nav-item">
                        <router-link :to="{path: '/company/scorecards'}">
                            <i class="fas fa-thumbs-up"></i><span>Bảng điểm</span>
                        </router-link>
                    </li>
                    <li class="breezy-nav-item">
                        <router-link :to="{path: '/company/campaigns'}">
                            <i class="fas fa-leaf"></i><span>Huấn luyện</span>
                        </router-link>
                    </li>
                    <li class="breezy-nav-item">
                        <router-link :to="{path: '/company/tags'}">
                            <i class="fas fa-tag"></i><span>Quản lý nhiệm vụ</span>
                        </router-link>

                    </li>

                </ul>
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
    import Vue from 'vue';
    // import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import User from '../models/User'
    import {fauth} from '@/firebase';
    import Company from '@/models/Company';


    export default Vue.extend({
        name: 'home',
        components: {
            // HelloWorld,
        },
        data() {
            return {
                loading: true,
                company: null as Company | null,
                currentUser: null as User | null,
            }
        },

        mounted() {
            fauth.onAuthStateChanged(async user => {
                if (user) {
                    this.currentUser = await new User().getCurrentUser();
                    if (this.currentUser) {
                        this.company = await (new Company()).getById(this.currentUser.company_id) as Company;

                    }
                    //    debugger;

                } else {
                    this.$router.push('/login');
                }
            })
        },
        methods: {}
    });
</script>
