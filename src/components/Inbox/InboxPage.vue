<template>
    <div class="d-flex flex-column overflow-auto" style="height: 100%">
        <header class="p-3 m-0 flex-shrink-0" style="min-width: 100%;">
            <b-dropdown class="default-bg-color" variant="custom-bg-color">
                <template slot="button-content">
                    {{inbox.type.text}}
                </template>
                <b-dropdown-item v-for="(opt, idx) of inbox.options" :key="idx" @click="inbox.type = opt">
                    {{opt.text}}
                </b-dropdown-item>
            </b-dropdown>
            <!--<b-form-select v-model="inbox.type" style="width: 200px; height:30px ;background-color: #E9ECEF"-->
            <!--:options="inbox.options"></b-form-select>-->
        </header>
        <div class="p-2 flex-grow-1" style="overflow: auto;">
            <div class="d-flex inbox-section" style="height:100%">
                <!-- Left border -->
                <div class="border px-0 rounded inbox-list-column">
                    <a href="#" style="text-decoration: none">
                        <div class="border py-2 text-secondary"
                             onclick="toDevPage()"
                             style="background: #ffffff;" >
                            <div class="d-flex">
                                <div class="col-2 d-flex align-self-center">
                                    <i class="fas fa-hospital-symbol fa-2x text-success"></i>
                                </div>
                                <div class="col-10">
                                    <div class="float-right">
                                        <small>3d Ago</small>
                                    </div>
                                    <h5 class="my-0">
                                        <b>Hong</b>
                                    </h5>
                                    <small> Làm việc @ không xác định <br></small>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="col-2 d-flex justify-content-end pr-0 align-items-center">
                                    <i class="fas fa-hospital-symbol text-info"></i>
                                </div>
                                <div class="col-10 d-flex align-items-center">
                                    <p class="mb-0" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis; font-size: 10px">Hi, You're confirmed for the f...</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <!-- Middle border -->
                <div class="border rounded inbox-detail-column">
                    <InboxDetailColumn v-model="currentConversation"/>
                    <!--<InboxMessages v-model="currentConversation"/>-->
                </div>
                <!-- Right border -->
                <div class="border rounded inbox-candidate-info d-none d-lg-block"
                     style="overflow-y: auto; height: 77vh">
                    <div class="d-flex justify-content-between">
                        <button type="button" class="btn btn-sm btn-primary mx-0">
                            <i class="fas fa-calendar-alt text-white"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-primary mx-0">
                            <i class="fas fa-list text-white"></i>
                        </button>
                        <button type="button" class="btn btn-sm mx-0" style="background: #edeff0">
                            <i class="fas fa-comments text-secondary"></i>
                        </button>
                        <div class="dropdown">
                            <button type="button" class="btn btn-sm dropdown-toggle mx-0"
                                    style="background: #edeff0; color: #68747e;"
                                    id="dropdown-type"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                <i class="fas fa-arrows-alt-h text-secondary"></i>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdown-type">
                                <a class="dropdown-item" href="#">Đã đăng ký</a>
                                <a class="dropdown-item" href="#">Nhận xét</a>
                                <a class="dropdown-item" href="#">Phỏng vấn</a>
                                <a class="dropdown-item" href="#">Đưa ra đề nghị</a>
                                <a class="dropdown-item" href="#">Không đủ tiêu chuẩn</a>
                                <a class="dropdown-item" href="#">Đã thuê</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button
                                type="button"
                                class="btn btn-sm dropdown-toggle mx-0"
                                style="background: #edeff0; color: #68747e;"
                                id="dropdownMessage"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i class="fas fa-user-plus text-secondary"></i>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMessage">
                                <a class="dropdown-item" href="#">Chưa được chỉ định</a>
                            </div>
                        </div>
                    </div>
                    <hr class="style3">
                    <div class="conatiner" style>
                        <div class="text-center">
                            <i class="fas fa-hospital-symbol fa-6x text-success"></i>
                        </div>
                        <div class="text-center">
                            <h4 class="mb-0">Hong</h4>
                            <small>Làm việc @ không xác định</small>
                            <br>
                            <a href="#">
                                <small>Thông tin</small>
                            </a>
                        </div>
                        <div class="text-center">
                            <a href="#">
                                <i class="fas fa-plus"></i>
                                <small>Thêm thẻ</small>
                            </a>
                        </div>
                        <hr>
                        <div>
                            <h6>Thông tin liên lạc</h6>
                            <div class="d-flex align-items-center">
                                <small>Email: &nbsp;</small>
                                <a href="hong@cloudjetkpi.com">
                                    <small>hong@cloudjetkpi.com</small>
                                </a>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <h6>Thông tin chung</h6>
                            <small>Tình trạng:</small>
                            <small class="text-secondary">Đã nộp đơn</small>
                            <br>
                            <small>Đăng ký tới:</small>
                            <small class="text-secondary">Hong Le Viet</small>
                        </div>
                        <hr>
                        <div>
                            <h6>Thông tin khác</h6>
                            <div class="d-flex align-items-center">
                                <small>Email: &nbsp;&nbsp;&nbsp;</small>
                                <a href="https://www.linkedin.com/in/leviethong" style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis; font-size: 15px">
                                    <small>https://www.linkedin.com/in/leviethong</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "~styles/inbox";
</style>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from 'vue-property-decorator';
    import InboxDetailColumn from "@/components/Inbox/InboxDetailColumn.vue";
    import InboxMessages from "@/components/Inbox/InboxMessages.vue";

    @Component({
        components: {
            InboxDetailColumn,
            InboxMessages,
        },
    })
    export default class InboxPage extends Vue {
        inbox = {
            type: null as any,
            options: [
                {value: "all", text: "Tất cả cuộc trò chuyện"},
                {value: "own", text: "Cuộc trò chuyện của tôi"}
            ],
            list: [] as any[],
        };
        currentConversation = {
            candidate: {
                name: "Le Viet Hong",
                email: "hong@cloudjetkpi.com",
                position: "Dev"
            },
            conversation: [] as any[],
        };

        @Prop({default: null})
        position_id: string;

        // Computed
        get getAllInbox(): any[] {
            return this.inbox.list;
        }

        get ownInbox(): any[] {
            return this.inbox.list.filter(inbox => {
                return true;
            });
        }

        // HOOK
        created() {
            this.inbox.type = this.inbox.options[0];
        }
    }

    // export default Vue.extend({
    //     name: "InboxPage",
    //     components: {InboxDetailColumn, InboxMessages},
    //     props: {
    //         position_id: {
    //             type: String | null,
    //             defaultValue: null,
    //         }
    //     },
    //     data() {
    //         return {
    //             inbox: {
    //                 type: null as any,
    //                 options: [
    //                     {value: "all", text: "Tất cả cuộc trò chuyện"},
    //                     {value: "own", text: "Cuộc trò chuyện của tôi"}
    //                 ],
    //                 list: [] as any[],
    //             },
    //             currentConversation: {
    //                 candidate: {
    //                     name: "Le Viet Hong",
    //                     email: "hong@cloudjetkpi.com",
    //                     position: "Dev"
    //                 },
    //                 conversation: [],
    //             }
    //         };
    //     },
    //     computed: {
    //         allInbox(): any[] {
    //             return this.$data.inbox.list;
    //         },
    //
    //         ownInbox(): any[] {
    //             return this.$data.inbox.list.filter(inbox => {
    //                 return true;
    //             });
    //         }
    //     },
    //
    //     created(): void {
    //         this.inbox.type = this.inbox.options[0];
    //     }
    // });
</script>
