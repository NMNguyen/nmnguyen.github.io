<template>
    <b-dropdown no-caret variant="dark" id="sidebar_settings">
        <template slot="button-content">
            <i title="Thiết lập" class="fas fa-cog"></i>
        </template>

        <b-dropdown-header>
            <div class="d-flex align-items-center">
                <b-img :src="currentUser.photoURL"
                       :width="35" :height="35"
                       rounded="circle"></b-img>
                <div class="px-2" v-if="currentUser">
                    <h6 class="my-0"><b>{{ currentUser.name }}</b></h6>
                    <small>{{ currentUser.email }}<br></small>
                </div>
            </div>
        </b-dropdown-header>
        <b-dropdown-item :to="{name: 'UserPopupSetting'}">
            <i class="fas fa-user"></i>&emsp;
            {{messages.SR_001_USER_SETTING_TITLE}}
        </b-dropdown-item>
        <b-dropdown-item to="https://cjs.zendesk.com/hc/vi/requests/new" target="_blank">
            <i class="fas fa-question-circle"></i>&emsp;
            Trợ giúp & Tài liệu
        </b-dropdown-item>
        <b-dropdown-item @click="signOut">
            <i class="fas fa-sign-out-alt"></i>&emsp;
            Đăng xuất
        </b-dropdown-item>

        <b-dropdown-divider></b-dropdown-divider>

        <b-dropdown-header>
            <div class="d-flex align-items-center">
                <b-img src="https://i.imgur.com/WcAHJNa.png"
                       :width="35" :height="35"
                       rounded="circle"></b-img>
                <div class="px-2" v-if="currentCompany">
                    <h6 class="my-0"><b>{{ currentCompany.name }}</b></h6>
                    <a :href="currentCompany.address" target="_blank">
                        <small>{{ currentCompany.address }}<br></small>
                    </a>
                </div>
            </div>
        </b-dropdown-header>

        <b-dropdown-item :to="{name: 'Settings'}">
            <i class="fas fa-building"></i>&emsp;
            Công ty
        </b-dropdown-item>

        <b-dropdown no-caret variant="light" class="dropdown-hover p-0">
            <template slot="button-content">
                <div class="text-left">
                    <i class="fas fa-cogs"></i>&emsp;
                    Tuyển dụng
                    <div class="float-right">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>

            </template>
            <template v-for="(submenu, idx) in RecruitingMenu">
                <b-dropdown-item
                    v-for="(item) in submenu" :key="item.to"
                    :to="{name: item.to}" @click="submenuClicked">
                    <i :class="'fas fa-' + item.icon"></i>&nbsp;
                    {{item.text}}
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
            </template>

        </b-dropdown>

<!--        <b-dropdown-item>-->
<!--            <i class="fas fa-envelope"></i>&emsp;-->
<!--            Mời các thành viên-->
<!--        </b-dropdown-item>-->

    </b-dropdown>
</template>

<style lang="scss">
    @import "~styles/_app_color";
    #sidebar_settings {
        a.dropdown-item, .dropdown {
            margin: 0 5px;
            width: auto;
            border-radius: 5px;
            display: flex;
            align-items: center;
            padding: 5px 10px;
            position: relative;

            &:hover {
                background-color: $default-btn-color;
            }
        }

        .dropdown-hover {
            > .dropdown-menu {
                left: 100%;
                top: 0;
            }
            &:hover > .dropdown-menu {
                display: block;
            }
        }
    }
</style>

<script lang="ts">
    import Vue from "vue";
    import {fauth} from '../../firebase';
    import {mapGetters} from 'vuex';
    import RecruitingMenu from "./RecruitingMenu";


    export default Vue.extend({
        props: {},
        data() {
            return {
                RecruitingMenu,
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
        methods: {
            signOut() {
                fauth.signOut().then(_ => {
                    this.$router.push('/login');
                })
            },
            submenuClicked(): any
            {
                // close thu cong
                // @ts-ignore
                document.querySelector("#sidebar_settings .dropdown-menu").classList.remove("show");
            }
        },
    });
</script>
