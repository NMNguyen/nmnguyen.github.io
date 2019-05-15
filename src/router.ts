import Vue from 'vue'
import Router, {Route} from 'vue-router'
import Home from './views/Home.vue'
import Portal from './views/Portal.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'activeTab',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/candidate/:candidateId',
            name: 'candidate_detail',
            components: {
                default: Home,
                modal_content: () => import(/* webpackChunkName: "about" */ './components/modals/CandidateModal.vue'),
            },
            meta: {
                showModal: true
            }
        },
        {
            path: '/portal',
            name: 'Portal',
            components: {
                default: Home,
                modal_content: () => import('./views/Portal.vue')
            },
            redirect: '/portal/type',
            meta: {
                showModal: true,
            },
            children: [
                {
                    path: 'type',
                    name: "portal-type",
                    components: {modal_child: () => import ('./components/portal/Type.vue')},

                },
                {
                    path: 'appearance',
                    name: "portal-appearance",
                    components: {modal_child: () => import ('./components/portal/Appearance.vue')},
                    meta: {
                        showModal: true,
                    },
                },
                {
                    path: 'messaging',
                    name: "portal-messaging",
                    components: {modal_child: () => import ('./components/portal/Messaging.vue')},
                    meta: {
                        showModal: true,
                    },
                },
                {
                    path: 'social',
                    name: "portal-social",
                    components: {modal_child: () => import ('./components/portal/Social.vue')},
                    meta: {
                        showModal: true,
                    },
                },
                {
                    path: 'perks',
                    name: "portal-perks",
                    components: {modal_child: () => import ('./components/portal/Perks.vue')},
                    meta: {
                        showModal: true,
                    },
                },
                {
                    path: 'testimonials',
                    name: "portal-testimonials",
                    components: {modal_child: () => import ('./components/portal/Testimonials.vue')},
                    meta: {
                        showModal: true,
                    },
                },
                {
                    path: 'employees',
                    name: "portal-employees",
                    components: {modal_child: () => import ('./components/portal/Employees.vue')},
                    meta: {
                        showModal: true,
                    },
                },
                {
                    path: 'media',
                    name: "portal-media",
                    components: {modal_child: () => import ('./components/portal/Media.vue')},
                    meta: {
                        showModal: true,
                    },
                },
                {
                    path: 'layout',
                    name: "portal-layout",
                    components: {modal_child: () => import ('./components/portal/Layout.vue')},
                    meta: {
                        showModal: true,
                    },
                },
                {
                    path: 'meta',
                    name: "portal-meta",
                    components: {modal_child: () => import ('./components/portal/Meta.vue')},
                    meta: {
                        showModal: true,
                    },
                }, {
                    path: 'custom-css-js',
                    name: "portal-custom-css",
                    components: {modal_child: () => import ('./components/portal/CustomCssJs.vue')},
                    meta: {
                        showModal: true,
                    },
                },

            ],
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/login',
            name: 'Login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
        },
        {
            path: '/inbox',
            name: 'Inbox',

            component: () => import(/* webpackChunkName: "about" */ './views/Inbox.vue')
        },
        {
            path: '/tasks',
            name: 'Tasks',

            component: () => import(/* webpackChunkName: "about" */ './views/Tasks.vue')
        },
        {
            path: '/calendar',
            name: 'Calendar',

            component: () => import(/* webpackChunkName: "about" */ './views/Calendar.vue')
        },
        {
            path: '/analytics',
            redirect: "analytics/overview",
            name: 'Analytics',
            component: () => import('./views/Report.vue'),
            children: [
                {
                    path: "overview",
                    name: "ReportOverview",
                    component: ()=>import("./components/Analytics/Overview/Index.vue"),
                },
                {
                    path: "applied",
                    name: "ReportApplied",
                    component: () => import("./components/Analytics/Applied/Index.vue"),
                }
                ,
                {
                    path: "sourced",
                    name: "ReportSourced",
                    component: () => import("./components/Analytics/Sourced/Index.vue"),
                },
                {
                    path: "referred",
                    name: "ReportReferred",
                    component: () => import("./components/Analytics/Referred/Index.vue"),
                },
                {
                    path: "recruited",
                    name: "ReportRecruited",
                    component: () => import("./components/Analytics/Recruited/Index.vue"),
                },
                {
                    path: "pipeline-performance",
                    name: "ReportPipelinePerformance",
                    component: () => import("./components/Analytics/PipelinePerformance/Index.vue"),
                },
                {
                    path: "time-to-fill",
                    name: "ReportTimeToFill",
                    component: () => import("./components/Analytics/TimeToFill/Index.vue"),
                },
                {
                    path: "messages",
                    name: "ReportMessages",
                    component: () => import("./components/Analytics/Messages/Index.vue"),
                },
                {
                    path: "questionaires",
                    name: "ReportQuestionaires",
                    component: () => import("./components/Analytics/Questionaires/Index.vue"),
                },
                {
                    path: "open-positions",
                    name: "ReportOpenPositions",
                    component: () => import("./components/Analytics/OpenPositions/Index.vue"),
                },
            ]
        },
        {
            path: '/positions',
            name: 'Positions',

            component: () => import(/* webpackChunkName: "about" */ './views/Positions.vue')
        },
        {
            path: '/candidates',
            name: 'Candidates',

            component: () => import(/* webpackChunkName: "about" */ './views/Candidates.vue')
        },
        {
            path: '/pipeline',
            name: 'Pipeline',

            component: () => import(/* webpackChunkName: "about" */ './views/Pipeline.vue')
        },
        {
            path: '/profile',
            name: 'Profile',

            component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue'),
            meta: {
                showModal: true,
            },
        },
        {
            path: '/company',
            name: 'Company',
            components: {
                default: Home,
                modal_content: () => import('./views/Company.vue'),
            },
            meta: {
                showModal: true,
            },
            children: [
                {
                    path: 'pipeline',
                    name: "setting-pipeline",
                    components: {modal_child: () => import('./components/company/pipeline.vue')},
                },
                {
                    path: 'questionnaires',
                    name: "setting-questionnaires",
                    components: {modal_child: () => import('./components/company/questionnaires.vue')},
                },
                {
                    path: 'interviewguides',
                    name: "setting-interview-guides",
                    components: {modal_child: () => import('./components/company/interviewguides.vue')},
                },
                {
                    path: 'messages-template',
                    name: "setting-messages-template",
                    components: {modal_child: () => import('./components/company/MessagesTemplate.vue')},
                },
                {
                    path: 'scorecards',
                    name: "setting-scorecards",
                    components: {modal_child: () => import('./components/company/scorecards.vue')},
                },
                {
                    path: 'campaigns',
                    name: "setting-campaigns",
                    components: {modal_child: () => import('./components/company/campaigns.vue')},
                },
                {
                    path: 'tags',
                    name: "setting-tags",
                    components: {modal_child: () => import('./components/company/tags.vue')},
                },

            ],
        },

        {
            path: '/settings',
            name: 'Settings',
            components: {
                default: Home,
                modal_content: () => import(/* webpackChunkName: "about" */ './views/Settings.vue')
            },
            redirect: '/settings/general',
            meta: {
                showModal: true,
            },
            children: [
                {
                    path: 'general',
                    name: 'SettingsGeneral',
                    components: {modal_child: () => import ('./components/settings/General.vue')},
                },
                {
                    path: 'users',
                    name: 'SettingsMembers',
                    components: {modal_child: () => import ('./components/settings/Users.vue')},
                },
                {
                    path: 'teams',
                    name: 'SettingsTeams',
                    components: {modal_child: () => import ('./components/settings/Teams.vue')},
                },
            ],
        },

        {
            path: '/settings/user', // with Modal
            name: 'UserPopupSetting',
            redirect: '/settings/user/profile',
            components: {
                default: Home,
                modal_content: () => import ('./components/modals/UserSetting.vue')
            },
            meta: {
                showModal: true,
            },
            children: [
                {
                    path: 'profile',
                    name: 'UserSettingProfile',
                    components: {modal_child: () => import('./components/settings/UserProfile.vue')},
                },
                {
                    path: 'password',
                    name: 'UserSettingPassword',
                    components: {modal_child: () => import('./components/settings/UserPassword.vue')},
                },
                {
                    path: 'notification',
                    name: 'UserSettingNotification',
                    components: {modal_child: () => import('./components/settings/UserNotify.vue')},
                },
                {
                    path: 'sign',
                    name: 'UserSettingSignature',
                    components: {modal_child: () => import('./components/settings/UserSignature.vue')},
                }
            ]
        },

        {
            path: "/event/:event_id",
            name: "EditEvent",
            component: Home,
            children: [
                {
                    path: '/',
                    name: "EventModal",
                    component: () => import("./views/EventMetting.vue"),
                    meta: {
                        showModal: true,
                    },
                }
            ]
        },

        // position detail + new position modal
        {
            path: "/positions",
            name: "NewPositionModal",
            components: {
                default: Home,
                modal_content: ()=> import("./components/Position/NewPositionModal.vue"),
            },
            meta: {
                showModal: true,
            },
            children: [
                {
                    path: "new",
                    name: "NewPosition",
                    components: {
                        modal_child: () => import("./components/Position/PositionDetailTab.vue"),
                    }
                },
                {
                    path: ":position_id",
                    redirect: ":position_id/edit/detail",
                },
                {
                    path: ":position_id/edit/detail",
                    name: "PositionDetailTab",
                    components: {
                        modal_child: ()=>import("./components/Position/PositionDetailTab.vue"),
                    }
                },
                {
                    path: ":position_id/edit/application",
                    name: "PositionApplicationTab",
                    components: {
                        modal_child: ()=>import("./components/Position/PositionApplicationTab.vue"),
                    }
                },
                {
                    path: ":position_id/edit/pipeline",
                    name: "PositionPipelineTab",
                    components: {
                        modal_child: ()=>import("./components/Position/PositionPipelineTab.vue"),
                    }
                },
                {
                    path: ":position_id/edit/scorecard",
                    name: "PositionScorecardTab",
                    components: {
                        modal_child: ()=>import("./components/Position/PositionScorecardTab.vue"),
                    }
                },
                {
                    path: ":position_id/edit/promote",
                    name: "PositionPromoteTab",
                    components: {
                        modal_child: ()=>import("./components/Position/PositionPromoteTab.vue"),
                    }
                },
                {
                    path: ":position_id/edit/team",
                    name: "PositionTeamTab",
                    components: {
                        modal_child: ()=>import("./components/Position/PositionTeamTab.vue"),
                    }
                }
            ]
        },

        // Tab in Position page
        {
            path: "/p/:position_id",
            name: "PositionDetail",
            component: ()=>import('./views/PositionDetail.vue'),
            redirect: "/p/:position_id/pipeline",
            children: [
                {
                    path: "pipeline",
                    name: "Pipeline",
                    component: ()=> import("./components/Position/Pipeline.vue"),
                },
                {
                    path: "candidates",
                    name: "PositionCandidates",
                    component: ()=> import("./components/Candidate/CandidatePage.vue"),
                },
                {
                    path: "calendar",
                    name: "PositionCalendar",
                    component: ()=> import("./components/Calendar/CalendarPage.vue"),
                },
                {
                    path: "inbox",
                    name: "PositionInbox",
                    component: ()=> import("./components/Inbox/InboxPage.vue"),
                },
                {
                    path: "activity",
                    name: "PositionActivity",
                    component: ()=> import("./components/Activity/Activity.vue"),
                },
                {
                    path: "tasks",
                    name: "PositionTasks",
                    component: ()=> import("./components/tasks/TaskPage.vue"),
                },
            ]
        },
        {
            path: "/positions/candidates",
            name: "Pipeline",
            component: ()=>import('./views/Pipeline.vue'),
        },

        {
            path: '*',
            name: "NotFound",
            components: {
                default: () => import('./views/404.vue'),
                modal_content: () => import('./views/404.vue'),
            },
        },
    ]
});

router.beforeEach((to: Route, from: Route, next) => {
    // console.log(to, from);
    if (to.matched.some(route=>route.meta.showModal)) {
        const lastFrom = from.matched[0];
        if (lastFrom) {
            // to.matched[0].meta.returnPath = lastFrom.path;
            to.matched[0].components.default = lastFrom.components.default;
            to.matched[to.matched.length - 1].meta.showModal = true;
            if (from.matched[1]) {
                to.matched[1].components.default = from.matched[1].components.default;
            }
        }
    }
    next();
});

export default router;
