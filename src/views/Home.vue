<template>
    <div class="home d-flex flex-column" style="height: 100%">
        <header class="border rounded flex-shrink-0 bg-light">
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="px-4">Bảng điều khiển</h4>
                <div class>
                    <ul class="list-inline my-4 d-flex align-items-center justify-content-end">
                        <li class="list-inline-item d-flex mx-4">
                            <h5 class="d-flex align-items-center">Số liệu vừa qua</h5>
                        </li>
                        <li class="list-inline-item d-flex mx-4">
                            <h4 class="d-flex align-items-center mx-2">1</h4>
                            <div class="text-secondary">
                                Vị trí
                                <br>còn trống
                            </div>
                        </li>
                        <li class="list-inline-item d-flex mx-4">
                            <h4 class="d-flex align-items-center mx-2">1</h4>
                            <div class="text-secondary">
                                Ứng viên
                                <br>mới
                            </div>
                        </li>
                        <!--                        <li class="list-inline-item d-flex align-items-center mx-4">-->
                        <!--                            <h4 class="d-flex mx-2">1</h4>-->
                        <!--                            <div class="text-secondary">-->
                        <!--                                Ứng viên-->
                        <!--                                <br>tiến tới-->
                        <!--                            </div>-->
                        <!--                        </li>-->
                        <li class="list-inline-item d-flex mx-4">
                            <h4 class="d-flex align-items-center mx-2">1</h4>
                            <div class="text-secondary">
                                Ứng viên
                                <br>đã thuê
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <div class="flex-grow-1 overflow-auto p-4 d-flex align-items-stretch">
            <!-- First column -->
            <div class="flex-shrink-0 border p-3 rounded bg-light" style="width: 300px">
                <div class>
                    <div class="dropdown">
                        <button
                            class="text-secondary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style="background: none;border: none"
                        >
                            <i class="fas fa-briefcase">&nbsp;</i>
                            <span>Vị trí</span>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Tất cả vị trí (Quản trị viên)</a>
                            <a class="dropdown-item" href="#">Vị trí của tôi</a>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <div style="background-color: white; padding: 20px;" v-if="positions.length==0">
                            <vcl-code></vcl-code>
                        </div>
                        <div v-for="(position, idx) in positions" :key="idx">
                            <PositionItem v-model="positions[idx]"/>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Second column -->
            <div class="flex-grow-1 mx-4 overflow-auto d-flex flex-column">
                <div class="flex-grow-1 flex-shrink-0 overflow-auto border rounded bg-light p-4 mb-2">
                    <div class>
                        <div class="dropdown">
                            <button
                                class="text-secondary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style="background: none;border: none"
                            >
                                <i class="fas fa-users">&nbsp;</i>
                                <span>Ứng cử viên</span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Ứng cử viên mới</a>
                                <a class="dropdown-item" href="#">Ứng cử viên của tôi</a>
                                <a class="dropdown-item" href="#">Ứng cử viên chưa xem</a>
                            </div>
                        </div>
                    </div>

                    <div style="background-color: white; padding: 20px;" v-if="candidates.length==0">
                        <vcl-code></vcl-code>
                    </div>
                    <a
                        href="javascript:void(0);"
                        style="text-decoration: none"
                        v-for="candidate in candidates"
                        @click="$router.push({ name: 'candidate_detail', params: { candidateId: candidate.id } })"
                    >
                        <div class="container border py-2 text-secondary" style="background: #ffffff;">
                            <div class="row">
                                <div class="col-2">
                                    <i class="fas fa-hospital-symbol fa-2x text-success"></i>
                                </div>

                                <div class="col-10 container">
                                    <h5 class="my-0">
                                        <b>{{ candidate.name}}</b>
                                    </h5>
                                    <small>
                                        Worked @ undefined
                                        <br>
                                    </small>
                                    <small>
                                        <i class="fa fa-briefcase"></i>
                                        Dev
                                    </small>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="flex-grow-1 overflow-auto bg-light rounded border mt-2 p-4">
                    <div class>
                        <i class="fas fa-check-square">&nbsp;&nbsp;</i>
                        <span>Công việc</span>
                    </div>
                    <div class="p-4 bg-white border text-center" v-if="tasks.length == 0">
                        <div>
                            <i class="fas fa-check-square"></i>
                        </div>
                        <div>You have no incomplete tasks.</div>
                    </div>
                    <div class="border bg-white" v-else>
                        <b-list-group>
                            <template v-for="(task, idx) in tasks">
                                <TaskListItem v-model="tasks[idx]"></TaskListItem>
                            </template>
                        </b-list-group>
                    </div>
                </div>
            </div>
            <!-- Third column -->
            <div class="flex-shrink-0 d-flex flex-column" style="width: 300px">
                <div class="border rounded bg-light p-4 overflow-auto" style="height:40%">
                    <div class="mb-4">
                        <i class="far fa-calendar-alt">&nbsp;&nbsp;</i>
                        <span>Lịch của tôi</span>
                    </div>
                    <div class="border bg-white py-4">
                        <div class="container">
                            <i class="far fa-calendar-alt fa-2x text-secondary d-flex justify-content-center"></i>
                            <br>
                        </div>
                        <div class="container">
                            <small class="text-secondary d-flex justify-content-center">
                                <br>Không có lịch hẹn.
                            </small>
                        </div>
                    </div>
                </div>
                <div class="border rounded p-4 mt-4 bg-light" style="height:60%;">
                    <div class>
                        <div class="dropdown">
                            <button
                                class="text-secondary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style="background: none;border: none"
                            >
                                <i class="fas fa-envelope">&nbsp;</i>
                                <span>Hộp thoại</span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Tất cả tin nhắn</a>
                                <a class="dropdown-item" href="#">Tin nhắn của tôi</a>
                            </div>
                        </div>
                    </div>
                    <a href="#" style="text-decoration: none">
                        <div class="border p-2 text-secondary bg-white" onclick="toDevPage()">
                            <div class="row">
                                <div class="col-2 d-flex align-items-center">
                                    <i class="fas fa-hospital-symbol fa-2x text-success"></i>
                                </div>
                                <div class="col-10 container">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="my-0">
                                            <b>Hong</b>
                                        </h5>
                                        <small>3d Ago</small>
                                    </div>
                                    <small>
                                        Worked @ undefined
                                        <br>
                                    </small>
                                </div>
                            </div>
                            <small>Xin chào</small>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import PositionItem from "@/components/Position/PositionItem.vue";
    // import CandidateModal from '@/components/modals/CandidateModal.vue';
    // import User from "../models/User";
    // import {fauth} from "@/firebase";
    import {mapGetters} from "vuex";
    import Task from "@/models/Task";
    import Position from "@/models/Position";
    import Candidate from "@/models/Candidate";
    import {VclCode, VclFacebook} from "vue-content-loading";
    import ModalWrapper from "@/components/ModalWrapper.vue";
    import TaskListItem from "@/components/tasks/TaskListItem.vue";

    export default Vue.extend({
        name: "home",
        components: {
            PositionItem,
            VclFacebook,
            VclCode,
            ModalWrapper,
            TaskListItem,
        },
        data() {
            return {
                tasks: [] as Task[],
                positions: [] as Position[],
                candidates: [] as Candidate[]
            };
        },
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                "currentUser",
                "currentCompany"
                // ...
            ])
        },
        mounted() {
            this.fetchData();

            this.$store.subscribe((mutation, state) => {
                switch (mutation.type) {
                    case "setCompany":
                        this.fetchData();
                }
            });
        },

        methods: {
            fetchData: function () {
                let self = this;

                new Task().getAllTasks().then(tasks => {
                    self.tasks = tasks;
                });

                new Position().getAllPositions().then(positions => {
                    self.positions = positions;
                });

                new Candidate().getAllCandidates().then(candidates => {
                    self.candidates = candidates;
                });
            }
        }
    });
</script>
