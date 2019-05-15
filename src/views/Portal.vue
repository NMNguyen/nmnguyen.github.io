<template>
    <div class="d-flex">
        <div class="flex-shrink-0 p-2 border" id="navbar">
            <ul class="">
                <li class="breezy-nav-item" role="tab">
                    <router-link :to="{name: 'portal-type'}">
                        <i class="fa fa-th"></i><span>Cấu hình</span>
                    </router-link>
                </li>
                <li class="breezy-nav-item">
                    <router-link :to="{ name: 'portal-appearance' }">
                        <i class="fa fa-paint-brush"></i><span>Giao diện</span>
                    </router-link>
                </li>
                <li class="breezy-nav-item">
                    <router-link :to="{name: 'portal-messaging' }">
                        <i class="fa fa-comment"></i><span>Thông báo</span>
                    </router-link>
                </li>
                <li class="breezy-nav-item">
                    <router-link :to="{name: 'portal-social'}">
                        <i class="fa fa-share-alt"></i><span>Website / Social</span>
                    </router-link>
                </li>
                <li class="breezy-nav-item">
                    <router-link :to="{name: 'portal-perks'}">
                        <i class="fa fa-gift"></i><span>Phúc lợi</span>
                    </router-link>
                </li>
                <li class="breezy-nav-item">
                    <router-link :to="{name: 'portal-testimonials'}">
                        <i class="fa fa-comments"></i><span>Lời giới thiệu</span>
                    </router-link>
                </li>

<!--                <li class="breezy-nav-item">-->
<!--                    <router-link :to="{name: 'portal-employees'}">-->
<!--                        <i class="fa fa-users"></i><span>Nhân viên</span>-->
<!--                    </router-link>-->
<!--                </li>-->

                <li class="breezy-nav-item">
                    <router-link :to="{name: 'portal-media'}">
                        <i class="fa fa-camera-retro"></i><span>Hình ảnh &amp; Video</span>
                    </router-link>
                </li>
                <li class="breezy-nav-item">
                    <router-link :to="{name: 'portal-layout'}">
                        <i class="fa fa-align-justify"></i><span>Bố cục nội dung</span>
                    </router-link>
                </li>
                <!--                    <li class="breezy-nav-item">-->
                <!--                        <router-link :to="{name: 'portal-meta'}">-->
                <!--                            <i class="fa fa-share-square"></i><span>Chia sẻ Mạng Xã Hội</span>-->
                <!--                        </router-link>-->

                <!--                    </li>-->
                <li class="breezy-nav-item">
                    <router-link :to="{name: 'portal-custom-css'}">
                        <i class="fa fa-code"></i><span>Tùy chỉnh CSS</span>
                    </router-link>

                </li>
            </ul>
        </div>
        <div class="flex-grow-1 overflow-auto px-4 pt-3" style="max-height: 95vh">
            <router-view name="modal_child"></router-view>
        </div>
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import User from '../models/User'
    import {fauth} from '@/firebase';
    import Company from '@/models/Company';
    import ModalWrapper from "@/components/ModalWrapper.vue";


    export default Vue.extend({
        name: 'home',
        components: {
            ModalWrapper,
        },
        data() {
            return {
                loading: true,
                company: new Company(),
                currentUser: new User(),
            }
        },

        mounted() {

            let that = this;


        },
        methods: {
            updateCompany: function () {
                this.company.update();
            },
        }
    });

</script>

<style>

</style>

