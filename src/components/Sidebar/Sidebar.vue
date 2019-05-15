<template>
    <div :class="classSidebar">
        <!-- Header -->
        <div class="d-flex flex-nowrap align-items-center"
            :class="[currentCompany ? '' : 'blur', 'bk']">
            <a class="hamburger"
                href="#"
                @click="nav.open = !nav.open">
                <i v-if="nav.open" class="fa fa-chevron-left"></i>
                <i v-if="!nav.open" class="fa fa-chevron-right"></i>
            </a>
            <div v-if="nav.open" class="flex-grow-1">
                <h5 v-if="currentCompany"
                    class="text-light my-0 text-left">
                    {{ currentCompany.name }}
                </h5>
                <!--                <p class="text-left my-0">Hong Le Viet</p>-->
            </div>
            <div class="d-flex app-sidebar-control">
                <SidebarNotification/>
                <SidebarSettings/>
            </div>
        </div>
        <!-- Search and menu -->
        <div class="menu">
            <b-nav vertical fill>
                <b-nav-item v-if="nav.open" class="mb-4">
                    <b-form-input id="sidebarSearchBar" name="searchbox"
                                  type="search"
                                  placeholder="Tìm kiếm ứng viên"/>
                </b-nav-item>
                <b-nav-item to="/" exact>
                    <i class="fas fa-home"></i>
                    <span>Trang chủ</span>
                </b-nav-item>
                <b-nav-item to="/inbox">
                    <i class="fas fa-envelope"></i>
                    <span>Hộp thoại</span>
                </b-nav-item>
                <b-nav-item to="/tasks">
                    <i class="fas fa-check-square"></i>
                    <span>Công việc</span>
                    <b-button class="nav-action"
                        variant="info"
                        title="Thêm công việc"
                        @click="showAddTaskModal">
                        <i class="fas fa-plus"></i>
                    </b-button>
                </b-nav-item>
                <b-nav-item to="/calendar">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Lịch / Meetings</span>
                </b-nav-item>
                <b-nav-item to="/analytics">
                    <i class="fas fa-chart-bar"></i>
                    <span>Báo cáo / Phân tích</span>
                </b-nav-item>
                <b-nav-item to="/positions">
                    <i class="fas fa-briefcase"></i>
                    <span>Vị trí</span>
                    <b-button class="nav-action" variant="info" title="Thêm Vị trí" to="/positions/new">
                        <i class="fas fa-plus"></i>
                    </b-button>
                </b-nav-item>
                <template v-if="nav.open">
                    <b-nav-item v-for="pos in positions" :to="`/p/${pos.id}`" :key="pos.id">
                        <span :class="{
                            'ml-4 fas fa-circle': true,
                            'text-success': pos.status === 'public',
                            'text-info': pos.status === 'draft',
                            'text-secondary': pos.status === 'archived',
                        }"></span>&nbsp;
                        <small>{{pos.name}}</small>
                    </b-nav-item>
                </template>

                <b-nav-item to="/candidates">
                    <i class="fas fa-users"></i>
                    <span>Ứng viên</span>
                    <b-button class="nav-action" title="Thêm ứng viên" variant="info"
                        @click="showAddCandidateModal">
                        <i class="fas fa-plus"></i>
                    </b-button>
                </b-nav-item>
            </b-nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .nav-item {
        display: flex;
        flex-direction: column;


        .nav-action {
            position: absolute;
            right: 1em;
            top: 50%;
            transform: translateY(-50%);
            padding: 0.25em 0.35rem;
            font-size: 0.75em;
        }
    }

    .nav-link {
        color: #aaa;
        transition: background-color 200ms, color 200ms;

        > i {
            width: 2em;
            text-align: center;
        }

        .app-sidebar:not(.open) & {
            > span {
                display: none;
            }

            > .nav-action {
                display: none;
            }
        }

        &.router-link-active, &:hover {
            color: white;
            background-color: #000;
        }
    }


    #sidebarSearchBar {
        background-color: var(--gray);
        transition: background-color 200ms;
        border: none;

        &:focus {
            background-color: white;
        }
    }

    .bk {
        transition: all 1s ease-out;
    }

    .blur {
        filter: blur(2px);
        color: red;
        opacity: 0.4;
    }
    .btn.close-button .fas.fa-times {
        font-size: 16px;
    }
    .btn.nav-action i {
        font-size: 11px;
    }
</style>

<script lang="ts">
    import Vue from 'vue';
    import SidebarSettings from './SidebarSettings.vue';
    import SidebarNotification from './SidebarNotification.vue';
    import menu from './SidebarMenu';
    import {mapGetters, mapMutations} from "vuex";

    export default Vue.extend({
        name: "Sidebar",

        components: {
            SidebarSettings,
            SidebarNotification,
        },

        data() {
            return {
                nav: {
                    open: true,
                },
                positions: [ // test
                    {
                        status: 'public',
                        id: 'asd',
                        name: "Senior DevOps",
                    },
                    {
                        status: 'draft',
                        id: 'dsa',
                        name: "Junior Tester"
                    },
                    {
                        status: 'archived',
                        id: '123456',
                        name: "Fullstack Engineer",
                    }
                ]
            }
        },
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'currentUser',
                'currentCompany',
                // ...
            ]),

            classSidebar(): any {
                return {
                    "text-light": true,
                    "text-left": true,
                    "open": this.nav.open,
                    "app-sidebar": true,
                }
            }
        },
        methods: {
            ...mapMutations([
                'modals/showAddTask',
                'modals/showAddCandidate',
            ]),

            showAddTaskModal(event): void {
                event.preventDefault();
                this['modals/showAddTask'](true);
            },

            showAddCandidateModal(event): void {
                event.preventDefault();// chan trigger cua nav-link cua menu
                this['modals/showAddCandidate'](true);
            }
        },
    })
</script>
